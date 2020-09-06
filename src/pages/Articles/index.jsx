import React from 'react';
import Grid from '@material-ui/core/Grid';
import articles from '../../data/articles';
import ArticleItem from '../../components/ArticleItem';
import './articles.styles.scss';

const Articles = () => {
	return (
		<div className="root">
			<h1 className="title">Read...</h1>
			<Grid container spacing={4} justify="center" alignItems="center">
				{articles.map((article) => (
					<ArticleItem article={article} key={article.title} />
				))}
			</Grid>
		</div>
	);
};

export default Articles;
