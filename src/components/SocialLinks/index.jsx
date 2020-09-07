import React from 'react';
import './social-links.styles.scss';

const SocialLinks = () => {
	const links = [
		{
			alt: 'github',
			src: 'https://img.icons8.com/nolan/64/github.png',
			account: 'https://github.com/franknmungai',
		},
		{
			alt: 'twitter',
			src: 'https://img.icons8.com/cute-clipart/64/000000/twitter.png',
			account: 'https://twitter.com/FrankmungaiN',
		},
		{
			alt: 'stackoverflow',
			src: 'https://img.icons8.com/color/48/000000/stackoverflow.png',
			account: 'https://stackoverflow.com/users/13388231/frank-mungai',
		},
	];
	return (
		<div className="links">
			{links.map((link) => (
				<img
					alt={link.alt}
					src={link.src}
					className="link"
					onClick={() => window.open(link.account)}
					key={link.account}
				/>
			))}
		</div>
	);
};

export default SocialLinks;
