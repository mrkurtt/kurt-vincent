import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { myprojects } from '../utils/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
	return (
		<section id="projects">
			<div className="w-full py-24 px-4 lg:px-32">
				<SectionTitle title={'my projects'} />{' '}
				<p className="text-center mb-6 font-light">
					Here you will find some of the personal and clients projects that I
					created.
				</p>
				<div className="flex justify-center">
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
						{myprojects.map((pr) => (
							<ProjectCard
								title={pr.title}
								description={pr.description}
								url={pr.link}
								image={pr.image}
								stack={pr.techStack}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
