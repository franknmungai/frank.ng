import React from 'react';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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
					<br />
					<Typography variant="body1" color="textSecondary" component="p">
						{project.introduction}
					</Typography>
					<br />
					<div className="row">
						<div>
							<AccessTimeIcon /> <span>{project.duration}</span>
						</div>
						<br />
						<Typography>
							<span className="dot" /> <span>{project.level}</span>
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing className={classes.buttons}>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
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
					<Typography variant="subtitle1">What you need to know </Typography>
					{project.prerequisites.map((prereq) => (
						<Typography paragraph key={prereq}>
							{prereq}
						</Typography>
					))}
					<Typography variant="subtitle2">What you'll learn</Typography>
					{project.topics.map((text) => (
						<Typography paragraph key={text}>
							{text}
						</Typography>
					))}
				</CardContent>
			</Collapse>
		</Card>
	);
}
