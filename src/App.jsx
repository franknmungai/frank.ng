import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Pages from './pages';
import Logo from './components/Logo';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavBar from './components/AppBar';
import SocialLinks from './components/SocialLinks';
import DrawerMenu from './components/DrawerMenu';
import './App.scss';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
		color: '#0C74DB',
		border: 'none',
		overflowX: 'hidden',
		'box-shadow': '0 0 3px 4px #ecebeb',
	},
	darkModeDrawerPaper: {
		width: drawerWidth,
		color: '#f4f4f4 !important',
		border: 'none !important',
		overflowX: 'hidden !important',
		'box-shadow': '0 0 3px 4px #000 !important',
		background: '#1a1a2e !important',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

let themeStyles;
const App = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const dark = useSelector((state) => state.user.theme === 'dark'); //todo change this to 'dark'

	useEffect(() => {
		if (dark) {
			themeStyles = import('./App-dark.styles.scss');
			console.log(themeStyles);
		}
	}, [dark]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Logo />
			<br />
			<SocialLinks />
			<br />
			<Divider />
			<DrawerMenu />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div className={classes.root}>
			<nav className={classes.drawer}>
				<NavBar handleDrawerToggle={handleDrawerToggle} />
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<SwipeableDrawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						onOpen={handleDrawerToggle}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: dark ? classes.darkModeDrawerPaper : classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</SwipeableDrawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Pages />
			</main>
		</div>
	);
};

export default App;
