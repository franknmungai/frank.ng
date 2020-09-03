import React from 'react';
import './logo.styles.scss';

const Logo = () => {
	return (
		<div className="logo">
			<img
				alt="logo"
				src={require('../../assets/logo.png')}
				className="image"
			/>

			<div className="brand-text">
				<span>Fra</span>
				<span>nk</span>
				<span>-ng</span>
			</div>
		</div>
	);
};

export default Logo;
