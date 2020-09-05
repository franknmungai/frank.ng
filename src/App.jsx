import React from 'react';
import './App.css';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AboutPage from './pages/About';
import Logo from './components/Logo';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArticlesPage from './pages/Articles';
import ProjectsPage from './pages/Projects';

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
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} style={{ marginTop: '0.75rem' }}>
						<ListItemIcon>
							<InboxIcon style={{ color: '#0C74DB' }} />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text} style={{ marginTop: '0.75rem' }}>
						<ListItemIcon>
							<InboxIcon style={{ color: '#0C74DB' }} />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div className={classes.root}>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* <NavBar handleDrawerToggle={handleDrawerToggle} /> */}
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
				<AboutPage />
				<ArticlesPage />
				<ProjectsPage />
			</main>
		</div>
	);
};

export default App;
