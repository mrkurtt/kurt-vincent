import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../utils/skills';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';

const Skills = () => {
	return (
		<section id="skills">
			<Container>
				<SectionTitle title={'my skills'} />
				<p
					data-aos="fade-down"
					data-aos-duration="1000"
					className="text-center mb-6 font-light"
				>
					Proficient in web and mobile application development, database
					management, and user experience design.
				</p>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="flex flex-wrap justify-center"
				>
					<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
						{skills.map((sk, i) => (
							<SkillCard key={i} title={sk.title} icon={sk.icon} />
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Skills;
