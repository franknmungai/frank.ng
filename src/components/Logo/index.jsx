import React from 'react';
import { useHistory } from 'react-router-dom';
import './logo.styles.scss';

const Logo = () => {
	const history = useHistory();

	const handleClick = () => history.push('/');
	return (
		<div className="logo" onClick={handleClick}>
			<span className="profile-img" />

			<div className="brand-text">
				<span>Fra</span>
				<span>nk</span>
				<span>-ng</span>
			</div>
		</div>
	);
};

export default Logo;
