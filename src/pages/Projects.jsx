import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { myprojects } from '../utils/projects';
import ProjectCard from '../components/ProjectCard';
import Container from '../components/Container';

const Projects = () => {
	return (
		<section id="projects">
			<Container>
				<SectionTitle title={'my projects'} />{' '}
				<p className="text-center mb-6 font-light">
					Here you will find some of the personal and clients projects that I
					created.
				</p>
				<div className="flex justify-center">
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
						{myprojects.map((pr, i) => (
							<ProjectCard
								key={i}
								title={pr.title}
								description={pr.description}
								url={pr.link}
								image={pr.image}
								stack={pr.techStack}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Projects;
