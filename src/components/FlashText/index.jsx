import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './flash-text.styles.scss';

const FlashText = ({ text }) => {
	const [glowText, setGlowText] = useState(0);
	console.log(glowText);

	useEffect(() => {
		const timer = setInterval(() => {
			if (glowText < text.length - 1) {
				setGlowText((state) => state + 1);
			} else {
				setGlowText(0);
			}
		}, 2500);

		return () => clearInterval(timer);
	}, [text.length, glowText, text]);

	return <span className="glowtext"> {text[glowText]} </span>;
};

FlashText.propTypes = {
	text: PropTypes.array.isRequired,
};

export default FlashText;
