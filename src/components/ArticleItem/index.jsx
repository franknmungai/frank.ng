import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
// import './article.styles.scss';

const ArticleItem = ({ article }) => {
	const getColor = () => {
		const value = article.category.toLowerCase();
		switch (value) {
			case 'humour':
				return '#1FB041';
			case 'javascript':
				return '#FFBB00';
			case 'typescript':
				return '#00227F';
			case 'trivia':
				return 'pink';
			default:
				return '';
		}
	};

	return (
		<Grid item xs={12} sm={12} md={6} key={article.title}>
			<Paper variant="outlined" className="articles" component={CardActionArea}>
				<h2 className="title">{article.title}</h2>
				<br />
				<br />
				<Chip
					variant="outlined"
					color="secondary"
					icon={<AccessTimeIcon />}
					label={article.duration + ' read'}
					className="chip-duration"
				/>
				<br />
				<br />
				<div className="category">
					<div className="dot" style={{ background: getColor() }} />
					<pre>{article.category}</pre>
				</div>
				<br />
				<p>
					{`${article.introduction?.slice(0, 200)}...`}
					<mark> Read more</mark>
				</p>
			</Paper>
		</Grid>
	);
};

export default ArticleItem;
