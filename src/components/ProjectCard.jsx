import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const ProjectCard = ({ title, description, image, stack, url }) => {
	return (
		<div
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1000"
			class="max-w-sm bg-gray-800 rounded-lg shadow hover:scale-105 transition-all ease-in-out cursor-pointer"
		>
			<a href="#">
				<img
					class="rounded-t-lg"
					src={
						image ??
						'https://www.webmaze.ae/wp-content/uploads/2023/09/best-ui-design-for-web-applications.webp'
					}
					alt=""
				/>
			</a>
			<div class="p-5">
				<div className="flex items-baseline gap-x-2">
					<h5 class="mb-2 text-xl font-bold tracking-tight text-green-400 dark:text-white">
						{title}
					</h5>
					<a href={url} target="_blank">
						<BsBoxArrowUpRight size={15} />
					</a>
				</div>

				<p class="mb-3 font-normal text-gray-200 dark:text-gray-400">
					{description}
				</p>

				<div className="flex justify-center gap-x-2 mt-6">
					{stack.map((st) => (
						<img
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
