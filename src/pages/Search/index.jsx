import React from 'react';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import SearchField from '../../components/SearchField';

const SearchPage = () => {
	return (
		<div>
			<SearchField />
			<div className="body">
				<p>Looking for something? Search here</p>
				<SearchSvg className="search-svg" />
			</div>
		</div>
	);
};

export default SearchPage;
