import React from 'react';
import AboutPic from '../assets/profile-pic.png';
const About = () => {
	return (
		<section id="about">
			<div className="py-32">
				<div className="flex flex-col bg-gray-800 rounded-lg px-8">
					<div className="flex justify-center items-center">
						<img src={AboutPic} alt="" width={350} />
						<div className="flex flex-col gap-y-6">
							<h1 className="lg:text-3xl text-green-400 text-left font-bold">
								about me
							</h1>

							<p className="text-xl">
								I'm <span className="text-green-400">Kurt Vincent Timajo</span>,
								a <span className="text-green-400">web developer</span> based in
								Cagayan de Oro City, Philippines. I specialize in{' '}
								<span className="text-green-400">full stack development</span>{' '}
								utilizing Javascript frameworks such as ReactJS, and NodeJS. I
								am dedicated to bringing creative ideas to life through building
								websites, web and mobile apps.
							</p>
						</div>
					</div>
				</div>{' '}
			</div>{' '}
		</section>
	);
};

export default About;
