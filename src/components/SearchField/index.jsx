import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './search-field.styles.scss';

const SearchField = ({ className = '', onFocus, onClickAway }) => {
	let classes = 'search ' + className;

	return (
		<ClickAwayListener onClickAway={onClickAway}>
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
			/>
		</ClickAwayListener>
	);
};

export default SearchField;
