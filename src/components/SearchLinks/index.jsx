import React from 'react';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import './search-links.styles.scss';

const SearchLink = ({ item }) => (
	<Fade in={true}>
		<div className="search-link">
			<Link className="title" to={`/read/${item.slug}`}>
				{item.title}
			</Link>

			<p className="intro">
				{item.introduction.slice(0, 100)}{' '}
				<Link to={`/read/${item.slug}`} className="link">
					{' '}
					...read more
				</Link>
			</p>
		</div>
	</Fade>
);

export default SearchLink;
