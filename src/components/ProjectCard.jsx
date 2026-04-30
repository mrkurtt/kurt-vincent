import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const ProjectCard = ({ title, description, image, stack, url }) => {
	return (
		<div
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1000"
			className="flex h-full min-w-0 w-full flex-col bg-gray-800 rounded-lg shadow hover:scale-105 transition-all ease-in-out cursor-pointer"
		>
			<a href="#" className="block shrink-0 overflow-hidden rounded-t-lg bg-gray-700/50">
				<img
					className="h-44 w-full object-cover sm:h-48"
					src={
						image ??
						'https://www.webmaze.ae/wp-content/uploads/2023/09/best-ui-design-for-web-applications.webp'
					}
					alt=""
				/>
			</a>
			<div className="flex flex-col flex-1 p-5">
				<div className="flex items-baseline gap-x-2">
					<h5 className="mb-2 text-xl font-bold tracking-tight text-green-400 dark:text-white">
						{title}
					</h5>
					<a href={url} target="_blank" rel="noreferrer noopener">
						<BsBoxArrowUpRight size={15} />
					</a>
				</div>

				<p className="mb-3 font-normal text-gray-200 dark:text-gray-400 flex-1">
					{description}
				</p>

				<div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-gray-700/60">
					{stack.map((st, i) => (
						<img
							key={i}
							src={st}
							alt="techstack"
							className="w-8 hover:scale-105 transition-all ease-in-out cursor-pointer"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
