'use client';

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

import TOC from "@/app/components/blog/TOC";
import HeaderInput from "@/app/components/blog/HeaderInput";
const Editor = dynamic(() => import('@/app/components/markdown/Editor'), { ssr: false });

const BlogEditor = () => {
	const [markdown, setMarkdown] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	return (
		<div>
			<TOC />

			<HeaderInput
				title={title} setTitle={setTitle}
				date={date} setDate={setDate}
				description={description} setDescription={setDescription}
				markdown={markdown}
			/>

			<Suspense fallback={null}>
				<Editor markdown={markdown} setMarkdown={setMarkdown} />
			</Suspense>
		</div>
	);
};

export default BlogEditor;
