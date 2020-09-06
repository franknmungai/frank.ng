import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import menuItems from './menu-data';
import './drawer-menu.styles.scss';

const DrawerMenu = () => {
	const [activeLink, setActiveLink] = useState();
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location.pathname]);

	const handleClick = ({ name, url }) => {
		setActiveLink(url);
		history.push(url);
	};

	const isActive = ({ url }) => url === activeLink || location.pathname === url;

	return (
		<List className="menu">
			{menuItems.map((item) => (
				<ListItem
					key={item.name}
					className={`list-item ${isActive(item) && 'active'}`}
					button
					onClick={handleClick.bind(this, item)}
				>
					<ListItemIcon>
						<img src={item.icon} alt={item.name} className="icon" />
					</ListItemIcon>
					<ListItemText primary={item.name} className="text" />
				</ListItem>
			))}
		</List>
	);
};

export default DrawerMenu;
