import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
	let Links = [
		{ name: 'home', link: '#' },
		{ name: 'about', link: '#about' },
		{ name: 'skills', link: '#skills' },
		{ name: 'projects', link: '#projects' },
		{ name: 'contact', link: '#contact' },
	];
	let [open, setOpen] = useState(false);

	return (
		<nav
			data-aos="fade-down"
			data-aos-duration="1500"
			className="z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-900 shadow-md w-full fixed top-0 left-0"
		>
			<div className="md:flex items-center justify-between  py-4 md:px-10 px-4">
				{/* logo section */}
				<div className="font-bold text-green-400 text-2xl cursor-pointer flex items-center gap-1">
					<span>kurt.vincent</span>
				</div>
				{/* Menu icon */}
				<div
					onClick={() => setOpen(!open)}
					className="text-gray-200 absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
				>
					{open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
				</div>
				{/* linke items */}
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open
							? 'top-12 mt-4 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-gray-900'
							: 'top-[-490px]'
					}`}
				>
					{Links.map((link) => (
						<li className="md:ml-8 md:my-0 my-7 font-semibold">
							<a
								href={link.link}
								className="text-gray-300 hover:text-blue-400 duration-500"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				{/* <button className="btn bg-green-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
					Hire Me
				</button> */}
			</div>
		</nav>
	);
};

export default Navbar;
