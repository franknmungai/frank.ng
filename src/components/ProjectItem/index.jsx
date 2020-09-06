import React, { useState } from 'react';
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
import './project-item.styles.scss';
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
} from '@material-ui/core';

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

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleSetFavorite = () => setFavorite((state) => !state);

	return (
		<Card className={classes.root} elevation={4}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={require('../../assets/logo.png')}
					title="Paella dish"
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
				<IconButton
					aria-label="add to favorites"
					onClick={handleSetFavorite}
					className={`${favorite && 'hot-icon-button'}`}
				>
					<WhatshotIcon className="hot-icon" />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="share">
					<LaunchIcon />
				</IconButton>
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
							<ListItem className="list-item">
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
							<ListItem className="list-item">
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
