import React, { useState } from 'react';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import SearchField from '../../components/SearchField';

import './search.styles.scss';

const SearchPage = () => {
	const [focus, setFocus] = useState();

	return (
		<div className="root">
			<SearchField
				className={focus ? 'focus' : ''}
				onFocus={() => setFocus(true)}
				// onClickAway={() => setFocus(false)}
			/>

			<div className="info">
				<p>Looking for something? Search here</p>
				<SearchSvg className="search-svg" />
			</div>
		</div>
	);
};

export default SearchPage;
