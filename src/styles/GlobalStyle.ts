import { createGlobalStyle } from 'styled-components'
import { PressoTheme } from '@/styles/PressoTheme'

const GlobalStyle = createGlobalStyle<{ theme: PressoTheme }>`
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
        color: ${({ theme }) => theme.textColorInverted.toString()};
        background: ${({ theme }) => theme.textColor.alpha(0.5).toString()};
    }

    html {
        font-family: ${({ theme }) => theme.fontFamily};
        font-weight: 400;
        color: ${({ theme }) => theme.textColor.toString()};

        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        width: 100%;
        overflow-x: hidden;
        font-size: calc(10px + 0.7vmin);
        letter-spacing: -0.05ch;
        font-display: swap;
    }

    /* TODO move to ShiftTheme */
    .tabular {
        font-family: "Gotham SSm Tabular A", "Gotham SSm Tabular B", "Noto Sans KR",
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", "Noto Color Emoji";
    }

    body {
        width: 100%;
        overflow: hidden;
        line-height: 1.5;
        background: ${({ theme }) => theme.backgroundColor.toString()};
    }

    b {
        font-weight: 600;
    }

    strike {
        opacity: 0.5;
    }

    a:link, a:visited {
        color: inherit;
        text-decoration: underline dashed 1px;
        transition: background .3s ease;
    }

    sup {
        vertical-align: top;
        font-size: 0.6em;
    }

    sub {
        vertical-align: bottom;
        font-size: 0.6em;
    }
`

export default GlobalStyle
