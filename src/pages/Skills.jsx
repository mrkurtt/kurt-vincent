import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../utils/skills';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
	return (
		<section id="skills">
			<div className="w-full py-24 px-4 lg:px-32">
				<SectionTitle title={'my skills'} />
				<p className="text-center mb-6 font-light">
					Proficient in web and mobile application development, database
					management, and user experience design.
				</p>
				<div className="flex flex-wrap justify-center">
					<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
						{skills.map((sk) => (
							<SkillCard title={sk.title} icon={sk.icon} />
						))}
					</div>
				</div>
			</div>{' '}
		</section>
	);
};

export default Skills;
