import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="font-lato">
			<Navbar />
			<div className="bg-gray-900 px-4 lg:px-32 w-full text-gray-300">
				{children}
			</div>
		</div>
	);
};

export default Layout;
