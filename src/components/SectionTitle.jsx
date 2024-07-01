import React from 'react';

const SectionTitle = ({ title }) => {
	return (
		<h1 className="text-center text-3xl lg:text-6xl text-green-400 font-bold mb-4">
			{title}
		</h1>
	);
};

export default SectionTitle;
