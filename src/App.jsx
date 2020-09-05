import React from 'react';
import './App.css';
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
		'box-shadow': '0 0 3px 6px #ecebeb',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const App = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Logo />
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
			<nav className={classes.drawer} aria-label="mailbox folders">
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
							paper: classes.drawerPaper,
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
