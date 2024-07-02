import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import { HiOutlineMail } from 'react-icons/hi';
import { VscGithubInverted } from 'react-icons/vsc';
import { LiaLinkedin } from 'react-icons/lia';
import Container from '../components/Container';

const Contact = () => {
	return (
		<section id="contact">
			<Container>
				<div className="flex flex-col items-center ">
					<SectionTitle title={"let's connect!"} />
					<div className="w-1/2 flex justify-center text-center">
						<p
							data-aos="fade-up"
							data-aos-duration="1000"
							className="text-md md:text-lg lg:text-xl"
						>
							I’d love to hear from you! Whether you have a question, a project
							idea, or just want to say hi, feel free to reach out.
						</p>
					</div>
					<div
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1000"
						className="max-w-1/2 bg-gray-800 rounded-xl py-6 px-12 mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
					>
						<h1 className="text-center text-green-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
							Kurt Vincent Timajo
						</h1>
						<p className="text-center font-light">Software Developer</p>
						<div className="flex justify-center">
							<div className="flex flex-col mt-6 gap-y-2">
								<ContactCard
									icon={<HiOutlineMail size={20} />}
									contactInfo={'timajo.kurtvincent08@gmail.com'}
									hrefValue={'mailto: timajo.kurtvincent08@gmail.com'}
								/>
								<ContactCard
									icon={<VscGithubInverted size={20} />}
									contactInfo={'github.com/mrkurtt'}
									hrefValue={'https://github.com/mrkurtt'}
								/>
								<ContactCard
									icon={<LiaLinkedin size={20} />}
									contactInfo={'Kurt Vincent Timajo'}
									hrefValue={
										'https://www.linkedin.com/in/kurt-vincent-timajo-813b061b6/'
									}
								/>
							</div>
						</div>
						<div className="flex justify-center mt-8">
							<button
								type="button"
								class="text-green-400 bg-gray-900 border border-green-400 hover:bg-gray-800 font-medium rounded-lg text-xs px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								<a href="mailto: timajo.kurtvincent08@gmail.com">
									Send me an email
								</a>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
