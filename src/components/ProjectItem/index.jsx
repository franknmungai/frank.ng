import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ReactComponent as AccessTimeIcon } from '../../assets/clock.svg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LaunchIcon from '@material-ui/icons/Launch';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import './project-item.styles.scss';
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		// minHeight: 600,
	},
	media: {
		height: '25%',
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

export default function ProjectItem({ project }) {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [favorite, setFavorite] = useState(false);
	const history = useHistory();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleSetFavorite = () => setFavorite((state) => !state);

	function createSlug(value) {
		return value
			.replace(/[^a-z0-9_]+/gi, '-')
			.replace(/^-|-$/g, '')
			.toLowerCase();
	}
	const handleClick = () => {
		history.push(`/article/${createSlug(project.title)}`);
	};
	return (
		<Card className={classes.root} elevation={4}>
			<CardActionArea onClick={handleClick}>
				<CardMedia
					className={classes.media}
					image={require('../../assets/logo.png')}
					title="Project image"
				/>
				<CardContent>
					<h4 className="title">{project.title}</h4>
					<br />
					<Typography variant="body1" color="textSecondary" component="p">
						{project.introduction}
					</Typography>
					<br />
					<div className="row">
						<div className="row">
							<AccessTimeIcon />{' '}
							<span className="time">{project.duration}</span>
						</div>
						<Typography>
							<span className="dot" />{' '}
							<span className="level">{project.level}</span>
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing className={classes.buttons}>
				<Tooltip title="Set as a favorite">
					<IconButton
						aria-label="add to favorites"
						onClick={handleSetFavorite}
						className={`${favorite && 'hot-icon-button'}`}
					>
						<WhatshotIcon className="hot-icon" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Share">
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Get started">
					<IconButton aria-label="lauch">
						<LaunchIcon />
					</IconButton>
				</Tooltip>

				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="subtitle1" className="text-center">
						What you need to know{' '}
					</Typography>
					<List>
						{project.prerequisites.map((prereq) => (
							<ListItem className="list-item" key={prereq}>
								<ListItemAvatar>
									<span className="dot" />
								</ListItemAvatar>
								<ListItemText>{prereq}</ListItemText>
							</ListItem>
						))}
					</List>
					<Typography variant="subtitle1" className="text-center">
						What you'll learn
					</Typography>
					<List>
						{project.topics.map((text) => (
							<ListItem className="list-item" key={text}>
								<ListItemAvatar>
									<span
										className="dot"
										style={{ backgroundColor: 'steelblue' }}
									/>
								</ListItemAvatar>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						))}
					</List>
				</CardContent>
			</Collapse>
		</Card>
	);
}
