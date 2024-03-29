import {getAllPosts, getPost} from "@/app/lib/blog/etc";
import Container from "@/app/components/Container";
import dayjs from "dayjs";
import TOC from "@/app/components/blog/TOC";
import Comment from "@/app/components/blog/Comment";

dayjs.locale("ko");

export const dynamic = 'force-static';

export const generateStaticParams = async () => {
	const posts = await getAllPosts();

	return posts.map((item) => {
		return {
			slug: item.title.replace(/ /g, "-").replace("#", "")
		};
	});
}

interface Params {
	params: {
		slug: string
	}
}

const Page = async ({ params }: Params) => {
	const { title, date, content }: any = await getPost(params.slug);

	return (
		<Container>
			<div className={"sm:mt-20 mt-6"}>
				<TOC />

				<div>
					<div className={`font-semibold sm:text-5xl sm:leading-[4rem] text-4xl`}>{ title }</div>
					{
						date && (
							<div className={`font-extralight text-base mt-4 text-neutral-400`}>
								Posted at { dayjs(date).format("YYYY년 MM월 DD일") }
							</div>
						)
					}
				</div>

				<div className={`my-10`}>
					{ content }
				</div>
				
				<Comment />
			</div>
		</Container>
	);
};

export default Page;
