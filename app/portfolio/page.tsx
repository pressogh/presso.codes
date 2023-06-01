import Container from "@/app/components/Container";
import ProjectGrid from "@/app/components/portfolio/ProjectGrid";
import { getAllProjects } from "@/app/lib/etc";
import { ProjectType } from "@/types/ProjectType";

const Page = async () => {
	const projects: ProjectType[] = await getAllProjects();
	
	return (
		<>
			<Container>
				<div className={`font-light sm:text-xl mt-10 text-md`}>
					지금까지 총 <span className={`font-medium`}>{projects.length}</span>개의 프로젝트를 진행했어요.
				</div>
				<hr className={`mt-3 mb-10`} />
				<ProjectGrid projects={projects} />
			</Container>
		</>
	);
};

export default Page;