import Tag from "@/app/components/portfolio/Tag";

interface Props {
	tags: string[]
}

const TagGrid = ({ tags }: Props) => {
	return (
		<div className={`sm:mt-4 mt-2 flex flex-wrap gap-2`}>
			{
				tags.map((tag, index) => (
					<Tag key={index} tag={tag} />
				))
			}
		</div>
	);
};

export default TagGrid;
