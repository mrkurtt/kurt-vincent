import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../components/skills';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
	return (
		<section id="skills">
			<div className="w-full h-screen py-24">
				<SectionTitle title={'my skills'} />

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
