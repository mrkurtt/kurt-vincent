import React from 'react';
import AboutPic from '../assets/profile-pic.png';
import SectionTitle from '../components/SectionTitle';
const About = () => {
	return (
		<section id="about">
			<div className="py-24 px-4 lg:px-32">
				<SectionTitle title={'about me'} />
				<div className="flex flex-col bg-gray-800 rounded-xl">
					<div className="flex flex-col lg:flex-row gap-x-16 justify-center items-center py-6 lg:py-16 px-6 lg:px-12">
						<img src={AboutPic} alt="" className="w-48 lg:w-64 mb-6 lg:mb-0" />
						<div className="flex flex-col gap-y-6 text-center lg:text-left">
							<p className="text-xl">
								I'm <span className="text-green-400">Kurt Vincent Timajo</span>,
								a <span className="text-green-400">software developer</span>{' '}
								based in Cagayan de Oro City, Philippines. I specialize in{' '}
								<span className="text-green-400">full stack development</span>{' '}
								utilizing Javascript frameworks such as ReactJS, and NodeJS. I
								am dedicated to bringing creative ideas to life through building
								websites, web and mobile apps.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
