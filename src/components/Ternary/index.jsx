import React from 'react';
import PropTypes from 'prop-types';

const Ternary = ({ fallback, condition, children }) => {
	//when condition is true, show children, when the condition is false, show fallaback

	return <React.Fragment>{!!condition ? children : fallback}</React.Fragment>;
};

Ternary.propTypes = {
	fallback: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	condition: PropTypes.any,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Ternary;
