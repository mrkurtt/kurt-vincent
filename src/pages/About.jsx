import React from 'react';
import AboutPic from '../assets/profile-pic.png';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
const About = () => {
	return (
		<section id="about">
			<Container>
				<SectionTitle title={'about me'} />
				<div
					data-aos="fade-down"
					data-aos-duration="1000"
					className="flex flex-col bg-gray-800 rounded-xl"
				>
					<div className="flex flex-col lg:flex-row gap-x-16 justify-center items-center py-6 lg:py-8 px-6 lg:px-12">
						<img
							data-aos="fade-right"
							data-aos-duration="1000"
							src={AboutPic}
							alt=""
							className="w-48 lg:w-96 mb-6 lg:mb-0 "
						/>
						<div
							data-aos="fade-left"
							data-aos-duration="1000"
							className="flex flex-col gap-y-6 text-center lg:text-left"
						>
							<p className="text-2xl">
								Hey there! I'm{' '}
								<span className="text-green-400">Kurt Vincent Timajo</span>, a{' '}
								<span className="text-green-400">software developer</span> based
								in the lively Cagayan de Oro City, Philippines specializing in{' '}
								<span className="text-green-400">full stack development</span>{' '}
								using Javascript frameworks such as ReactJS, and NodeJS. I love
								mixing creativity with code to create practical and innovative
								solutions.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
