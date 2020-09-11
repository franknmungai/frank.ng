import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import articles from '../../data/articles';
import ArticleItem from '../../components/ArticleItem';
import './articles.styles.scss';

const Articles = () => {
	const articles = useSelector((state) => state.articles);
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
