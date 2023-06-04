interface Props {
	icon: string,
}

const LinkIcon = ({ icon }: Props) => {
	if (icon === 'github') {
		return (
			<div className={`inline-block sm:w-20 sm:h-20 w-12 h-12 group`}>
				<div className={`absolute sm:w-20 sm:h-20 w-12 h-12 sm:rounded-2xl rounded-xl bg-[rgb(51,51,51)] transform group-hover:scale-110 duration-300 shadow-[0_0_0.5em_0.5em_rgba(51,51,51,0.075)] dark:shadow-[0_0_0.5em_0.5em_rgba(51,51,51,0.25)]`} />
				<div className={`relative sm:w-20 sm:h-20 w-12 h-12 flex justify-center items-center`}>
					<svg fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`sm:w-10 sm:h-10 w-6 h-6 group-hover:scale-125 transform duration-300`}>
						<path
							fillRule="evenodd"
					        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
						>
						</path>
					</svg>
				</div>
			</div>
		)
	} else if (icon === 'play-store') {
		return (
			<div className={`inline-block sm:w-20 sm:h-20 w-12 h-12 group`}>
				<div className={`absolute sm:w-20 sm:h-20 w-12 h-12 sm:rounded-2xl rounded-xl bg-indigo-50 transform group-hover:scale-110 duration-300 shadow-[0_0_0.5em_0.5em_rgba(238,242,255,0.5)] dark:shadow-[0_0_0.5em_0.5em_rgba(238,242,255,0.25)]`} />
				<div className={`relative sm:w-20 sm:h-20 w-12 h-12 flex justify-center items-center bg-in`}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" className={`sm:w-10 sm:h-10 w-6 h-6 group-hover:scale-125 transform duration-300 ml-0.5`}>
						<g>
							<path fill={"#32BBFF"} d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028 C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"/>
							<path fill={"#32BBFF"} d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96 c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"/>
							<path fill={"#32BBFF"} d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"/>
						</g>
						<path fill={"#2C9FD9"} d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314 L302.012,255.98H23.549z"/>
						<path fill={"#29CC5E"} d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212 C322.891,142.356,227.427,88.937,79.355,6.028z"/>
						<path fill={"#D93F21"} d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789 c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"/>
						<path fill={"#FFD500"} d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123 l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"/>
						<path fill={"#FFAA00"} d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205 C446.624,300.379,470.108,287.294,470.108,287.294z"/>
					</svg>
				</div>
			</div>
		)
	} else if (icon === 'app-store') {
		return (
			<div className={`inline-block sm:w-20 sm:h-20 w-12 h-12 group`}>
				<div className={`absolute sm:w-20 sm:h-20 w-12 h-12 sm:rounded-2xl rounded-xl bg-[#0071E3] transform group-hover:scale-110 duration-300 shadow-[0_0_0.5em_0.5em_rgba(0,113,227,0.075)] dark:shadow-[0_0_0.5em_0.5em_rgba(0,113,227,0.25)]`} />
				<div className={`relative sm:w-20 sm:h-20 w-12 h-12 flex justify-center items-center bg-in`}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" className={`sm:w-10 sm:h-10 w-6 h-6 scale-[2.0] group-hover:scale-[2.5] transform duration-300 ml-0.5`}>
						<g>
							<g>
								<path fill={"white"} d="M424.547,332.472h-45.833l-52.48-90.685c-8.325,9.178-13.397,21.311-13.397,34.653c0,8.909,2.267,17.281,6.238,24.602 c0.404,0.739,0.809,1.455,1.257,2.171l65.597,113.363c4.957,8.565,15.937,11.5,24.523,6.555s11.529-15.897,6.571-24.463 l-17.581-30.379h25.105c9.915,0,17.953-8.019,17.953-17.909S434.462,332.472,424.547,332.472z M206.895,375.005 c-4.145,0-8.077,0.885-11.641,2.451l-12.277,21.212c-4.957,8.565-2.015,19.518,6.571,24.463 c8.587,4.945,19.567,2.011,24.524-6.555l16.745-28.932C225.613,380.017,216.842,375.005,206.895,375.005z M313.807,332.472H262.75 l75.869-131.087c4.958-8.566,2.016-19.519-6.57-24.464c-8.587-4.945-19.566-2.011-24.524,6.555l-7.524,13l-7.524-13 c-4.958-8.566-15.938-11.5-24.524-6.555s-11.529,15.898-6.572,24.464l17.89,30.909l-57.98,100.178h-45.837 c-9.915,0-17.953,8.018-17.953,17.908s8.038,17.909,17.953,17.909h162.353c1.269-3.054,1.976-6.396,1.976-9.906 C339.781,344.072,328.152,332.472,313.807,332.472z" />
							</g>
						</g>
					</svg>
				</div>
			</div>
		)
	} else if (icon === 'figma') {
		return (
			<div className={`inline-block sm:w-20 sm:h-20 w-12 h-12 group`}>
				<div className={`absolute sm:w-20 sm:h-20 w-12 h-12 sm:rounded-2xl rounded-xl bg-[rgb(51,51,51)] transform group-hover:scale-110 duration-300 shadow-[0_0_0.5em_0.5em_rgba(51,51,51,0.075)] dark:shadow-[0_0_0.5em_0.5em_rgba(51,51,51,0.25)]`} />
				<div className={`relative sm:w-20 sm:h-20 w-12 h-12 flex justify-center items-center bg-in`}>
					<svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`sm:w-10 sm:h-10 w-6 h-6 group-hover:scale-125 transform duration-300 ml-0.5`}>
						<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
						<path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
						<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
						<path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
						<path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
					</svg>
				</div>
			</div>
		)
	}
	
	return (
		<div>
			{ icon }
		</div>
	);
};

export default LinkIcon;
