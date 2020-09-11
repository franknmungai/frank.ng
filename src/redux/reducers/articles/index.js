import articles from './data';
import createSlug from '../projects/create-slug';

const nextArticles = articles.map((article) => ({
	...article,
	slug: createSlug(article.title),
}));
const articlesReducer = (state = nextArticles, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default articlesReducer;
