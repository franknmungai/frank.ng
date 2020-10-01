import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(4),
		right: theme.spacing(4),
	},
}));

const ScrollTop = (props) => {
	const { children, window } = props;
	const classes = useStyles();

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = () => {
		const anchor = document.querySelector('#back-to-top-anchor');
		console.log(anchor);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
};

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
};

export default () => (
	<ScrollTop>
		<Fab color="primary" size="large" aria-label="scroll back to top">
			<KeyboardArrowUpIcon fontSize="large" />
		</Fab>
	</ScrollTop>
);
