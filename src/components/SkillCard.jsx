import React from 'react';

const SkillCard = ({ title, icon }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-y-3 bg-slate-800 p-4 rounded-xl hover:scale-105 transition-all ease-in-out cursor-pointer">
			<img src={icon} alt={title} className="mx-auto mb-0 sm:mb-1 w-28 h-28" />
			<h1 className="text-center text-[9px] sm:text-sm">{title}</h1>
		</div>
	);
};

export default SkillCard;
