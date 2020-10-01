import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import './appbar.styles.scss';
const useStyles = makeStyles((theme) => ({
	menuButton: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		position: 'absolute',
		left: '20px',
	},
}));
const NavBar = ({ handleDrawerToggle }) => {
	const classes = useStyles();

	return (
		<div className="nav-wrapper">
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				className={classes.menuButton}
			>
				<MenuIcon />
			</IconButton>
		</div>
	);
};

export default NavBar;
