import {getWorkExperience} from "@/app/lib/about/etc";
import dayjs from "dayjs";
import Link from "next/link";
import WorkExperienceTitleToolTipIcon from "@/app/components/about/WorkExperienceTitleToolTipIcon";
import {WorkExperienceType} from "@/types/about/WorkExperienceType";

const WorkExperience = async () => {
	const data: WorkExperienceType = await getWorkExperience();
	
	return (
		<div className={`mt-4 tracking-wide`}>
			<div className={`text-4xl font-medium tracking-tighter mb-8`}>{ data.title }</div>
			<div>
				{
					data.contents.map((content, index) => {
						return (
							<div key={content.name} className={`flex flex-row justify-between w-full mb-16`}>
								<div className={`sticky top-8 w-40 h-full`}>
									<div className={`text-2xl font-medium mb-2`}>{ content.name }</div>
									<div className={`text-sm`}>
										{ content.startDate && dayjs(content.startDate, "YYYY.MM").format("YYYY.MM") }
										{ (content.startDate || content.endDate) && ' ~ ' }
										{ content.endDate && dayjs(content.endDate, "YYYY.MM").format("YYYY.MM") }
									</div>
									<div>{ content.position }</div>
									<div className={`text-neutral-500`}>{ content.description }</div>
								</div>
								
								<div className={`w-[32rem]`}>
									{
										content.projects.map((project, index) => {
											return (
												<div key={project.title.text} className={`mb-10`}>
													<div className={`inline-block text-2xl font-medium mb-2 ${project.title.links && "text-[#4B6EA0]"} group relative`}>
														<div>{ project.title.text }</div>
														{
															project.title.links &&
															<span
																className={`
	                                                                    invisible
	                                                                    group-hover:visible
	                                                                    bg-[#4B6EA0]
	                                                                    text-white
	                                                                    text-center
	                                                                    px-6
	                                                                    py-4
	                                                                    absolute
	                                                                    z-10
	                                                                    rounded-2xl
	                                                                    after:contents-['']
	                                                                    after:absolute
	                                                                    after:border-[5px]
	                                                                    after:top-full
	                                                                    after:left-[20%]
	                                                                    after:border-[#4B6EA0_transparent_transparent_transparent]
	                                                                    opacity-0
	                                                                    group-hover:opacity-100
	                                                                    transition-all
	                                                                    duration-300
	                                                                    group-hover:bottom-[150%]
	                                                                    bottom-[100%]
	                                                                    shadow-lg
	                                                                    flex
	                                                                    flex-row
	                                                                    justify-center
	                                                                    items-center
	                                                                    gap-5
	                                                                `}
															>
	                                                                {
		                                                                project.title.links.map((link, index) => {
			                                                                return (
				                                                                <Link key={link.url} href={link.url}>
					                                                                <WorkExperienceTitleToolTipIcon type={link.type} />
				                                                                </Link>
			                                                                )
		                                                                })
	                                                                }
	                                                            </span>
														}
													</div>
													<div className={`text-sm`}>
														{ project.startDate && dayjs(project.startDate, "YYYY.MM").format("YYYY.MM") }
														{ (project.startDate || project.endDate) && ' ~ ' }
														{ project.endDate && dayjs(project.endDate, "YYYY.MM").format("YYYY.MM") }
													</div>
													<div>
														<div>{ project.description }</div>
														<ul className={`list-disc list-outside mt-4 text-base leading-7 ml-4 marker:text-[rgb(75,110,160)] marker`}>
															{
																project.works && project.works.map((work, index) => {
																	return (
																		<li key={work} className={`mb-5 pl-2 [&_a]:text-blue-500 [&_a]:dark:text-blue-400 [&_a]:cursor-pointer`} dangerouslySetInnerHTML={{ __html: work }} />
																	);
																})
															}
														</ul>
														<div className={`flex gap-2 flex-wrap w-full`}>
															{
																project.techStack && project.techStack.map((tech, index) => {
																	return (
																		<span key={tech} className={`text-xs px-2 py-0.5 bg-[#ECEEF0] dark:bg-[#26292B] rounded-full`}>{ tech }</span>
																	);
																})
															}
														</div>
													</div>
												</div>
											);
										})
									}
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default WorkExperience;