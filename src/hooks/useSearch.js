import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';

const useSearch = () => {
	const { articles, projects } = useStore().getState();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const nextArticles = articles.map((article) => ({
			...article,
			type: 'Article',
		}));
		const nextProjects = projects.map((article) => ({
			...article,
			type: 'Project',
		}));

		setPosts(nextArticles.concat(nextProjects));
	}, [articles, projects]);

	const textSearch = (terms) => {
		terms = terms.toLowerCase();

		const results = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(terms) ||
				post.introduction.toLowerCase().includes(terms)
		);
		// setPosts(results);
		return results;
	};

	return { textSearch };
};

export default useSearch;
