import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './search-field.styles.scss';

const SearchField = ({ className = '', onFocus, onSubmit, ...props }) => {
	let classes = 'search ' + className;
	const [searchText, setSearchtext] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(searchText);
	};

	useEffect(() => {
		onSubmit(searchText);
		//eslint-disable-next-line
	}, [searchText]);
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				className={classes}
				placeholder="Search"
				type="search"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				fullWidth
				variant="outlined"
				onFocus={onFocus}
				value={searchText}
				onChange={({ target }) => setSearchtext(target.value)}
			/>
		</form>
	);
};

export default SearchField;
