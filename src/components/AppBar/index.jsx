import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from './appbar.styles.scss';
const useStyles = makeStyles((theme) => ({
	menuButton: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		padding: '1rem',
	},
}));
const NavBar = ({ handleDrawerToggle }) => {
	const classes = useStyles();

	return (
		<div className={styles.navWrapper}>
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

/*
<AppBar
				position="fixed"
				className={classes.appBar && 'nav'}
				color="secondary"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
*/

export default NavBar;
