import { join } from 'path';
import fs from "fs";
import matter from 'gray-matter';
import { ProjectType } from "@/types/ProjectType";

import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "@/app/mdx-components";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const cwd = process.cwd();
const projectsDirectory = join(cwd, '/_projects');

const getAllMdFiles = () => {
	return fs.readdirSync(projectsDirectory).filter((path) => /\.mdx?$/.test(path));
}

const parseMarkdown = async (filename: string) => {
	const markdownWithMetadata = fs.readFileSync(
		join(projectsDirectory, filename),
		'utf-8'
	);
	
	const { data } = matter(markdownWithMetadata);
	return {
		...data,
	}
}

export const getAllProjects = async () => {
	const mdFiles = getAllMdFiles();
	
	const projects: ProjectType[] = [];
	for (const file of mdFiles) {
		projects.push(await parseMarkdown(file) as ProjectType);
	}
	
	return projects;
}

export const getProject = async (slug: string) => {
	const parsed = decodeURIComponent(slug);
	
	const markdownWithMetadata = fs.readFileSync(
		join(projectsDirectory, `${parsed}.mdx`),
		'utf-8'
	);
	
	const { content, frontmatter } = await compileMDX({
		source: markdownWithMetadata,
		options: {
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [rehypePrism],
			},
			parseFrontmatter: true,
		},
		components: {...MDXComponents({})}
	});
	
	return {
		...frontmatter,
		content,
	}
}
