import React, { useState } from 'react';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import SearchField from '../../components/SearchField';
// import { useSelector, useDispatch } from "react-redux";
import useSearch from '../../hooks/useSearch';

import './search.styles.scss';
import SearchLink from '../../components/SearchLinks';

const SearchPage = () => {
	const [focus, setFocus] = useState();
	const [results, setResults] = useState([]);
	const { textSearch } = useSearch();

	const handleSearch = (text) => {
		const results = textSearch(text);
		setResults(results);
	};

	console.log({ results });
	return (
		<div className="root">
			<SearchField
				className={focus ? 'focus' : ''}
				onFocus={() => setFocus(true)}
				onSubmit={handleSearch}
			/>

			{!results.length ? (
				<div className="info">
					<p>Looking for something? Search here</p>
					<SearchSvg className="search-svg" />
				</div>
			) : (
				results.map((item) => <SearchLink item={item} key={item.title} />)
			)}
		</div>
	);
};

export default SearchPage;
