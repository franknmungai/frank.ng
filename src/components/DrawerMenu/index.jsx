import React from 'react';
import './drawer-menu.styles.scss';

const DrawerMenu = () => {
	const menuItems = [
		{
			name: 'Articles',
			icon: 'https://img.icons8.com/cute-clipart/64/000000/hot-article.png',
		},
		{
			name: 'Learn and Practise',
			icon: 'https://img.icons8.com/nolan/64/code.png',
		},
		{
			name: 'Search',
			icon: 'https://img.icons8.com/fluent/100/000000/search.png',
		},
		{
			name: 'About',
			icon: 'https://img.icons8.com/fluent/100/000000/user-male-circle.png',
		},
		{
			name: 'Contact',
			icon: 'https://img.icons8.com/nolan/64/share-2.png',
		},
	];

	return (
		<div className="menu">
			{menuItems.map((item) => (
				<div className="menu-item"></div>
			))}
		</div>
	);
};

export default DrawerMenu;
