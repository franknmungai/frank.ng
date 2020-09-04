import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as StackOverflowIcon } from '../../assets/stack-overflow.svg';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from './appbar.styles.scss';
const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));
const NavBar = ({ handleDrawerToggle }) => {
	const classes = useStyles();

	return (
		<div className={classes.appBar && styles.navWrapper}>
			<nav className="nav">
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>

				<div className="brand">Frank</div>
				<div className="social-links">
					<div className="social">
						<GithubIcon />
					</div>
					<div className="social">
						<TwitterIcon />
					</div>
					<div className="social">
						<StackOverflowIcon />
					</div>
				</div>
			</nav>
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
