import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';

const useSearch = () => {
	const { articles, projects } = useStore().getState();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(articles.concat(projects));
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
