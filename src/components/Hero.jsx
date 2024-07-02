import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/16/solid';

const Hero = () => {
	return (
		<section id="hero">
			<div className="hero-section flex justify-center items-center h-screen">
				<div
					data-aos="fade-up"
					data-aos-duration="1500"
					className="flex w-full gap-x-16 justify-center items-center "
				>
					<div className="flex flex-col items-center gap-y-4">
						<p className="text-lg md:text-xl lg:text-3xl">Hello there! I'm</p>
						<h1
							data-aos="fade-up"
							className="text-center font-bold text-green-400 text-6xl md:text-7xl lg:text-8xl "
						>
							Kurt Vincent Timajo
						</h1>
						<hr />
						<div className="flex justify-center items-center gap-x-2">
							<CodeBracketIcon className="w-8 h-8 text-green-400" />
							<h3 className="text-lg md:text-xl lg:text-3xl">
								Software Developer
							</h3>
							<CodeBracketIcon className="w-8 h-8 text-green-400" />
						</div>
						<button
							type="button"
							class="w-48 text-gray-200 bg-gray-900 border border-green-400 focus:outline-none hover:shadow-md hover:shadow-green-400 font-medium rounded-xl text-xs px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							<a
								href="https://drive.google.com/file/d/1at_jN4lGc_xlvUZysVwrx4BE-GDjjrgW/view?usp=sharing"
								target="_blank"
							>
								DOWNLOAD RESUME
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
