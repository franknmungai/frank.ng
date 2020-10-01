import { useState, useEffect } from 'react';
import mojs from 'mo-js';

const useButtonAnimation = (el) => {
	const initialState = new mojs.Timeline();
	const [animationTimeline, setAnimationTimeline] = useState(initialState);

	useEffect(() => {
		const scale = new mojs.Html({
			el: '#nav-wrapper',
			duration: 300,
			scale: { 1.3: 1 }, //initial[key]: final[value]
			easing: mojs.easing.ease.out,
		});
		setAnimationTimeline((animation) => animation.add([scale]));
	}, [el]);

	return animationTimeline;
};

export default useButtonAnimation;
