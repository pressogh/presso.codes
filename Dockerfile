FROM --platform=$BUILDPLATFORM node:20.9.0-alpine AS base

ARG NEXT_PUBLIC_API_URL
ARG BUCKET_PRE_SIGNED_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV BUCKET_PRE_SIGNED_URL=$BUCKET_PRE_SIGNED_URL

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY .yarn ./.yarn
COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json yarn.lock* ./

RUN yarn install --immutable

FROM base AS builder
WORKDIR /app

COPY . .

COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.pnp.cjs /app/.pnp.loader.mjs ./

RUN yarn build

FROM base AS runner

LABEL email="caff1nepill@gmail.com"
LABEL name="presso"

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public* ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

RUN rm -rf .yarn
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.pnp.cjs /app/.pnp.loader.mjs /app/package.json  ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN yarn global add pm2

USER nextjs

ENV PORT=3000
ENV HOSTNAME=presso.ac
EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start", "server.js", "--node-args", "-r ./.pnp.cjs", "--env", "production", "--watch", "--name", "presso.ac"]
