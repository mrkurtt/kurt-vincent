import React from 'react';

const ContactCard = ({ icon, contactInfo, hrefValue }) => {
	return (
		<div className="flex items-center justify-start gap-x-2">
			<div>{icon}</div>
			<p className="font-light cursor-pointer text-sm">
				<a href={hrefValue} target="_blank">
					{contactInfo}
				</a>
			</p>
		</div>
	);
};

export default ContactCard;
