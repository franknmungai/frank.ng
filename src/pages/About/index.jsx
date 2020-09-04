import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import './homepage.styles.scss';

const AboutPage = () => {
	const [glowText, setGlowText] = useState(0);
	const text = [
		'knowledge 📚',
		'concepts 🎯',
		'code <⁄>',
		'ideas 💡',
		'resources 🎉',
		'jokes 😁😁',
	];
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
	return (
		<div className="home">
			<h2 className="title">Meet Frank</h2>

			<div className="bio">
				<span alt="Frank Blog owner" className="profile-img" />
				<p>A software developer, engineering student and indie hacker</p>
				<p>
					I created this blog to share my{' '}
					<span className="glowtext"> {text[glowText]} </span>
					with friends such as you.
				</p>
			</div>

			<Grid
				container
				spacing={6}
				alignItems="stretch"
				justify="center"
				className="about"
			>
				<Grid item xs={12} sm={12} md={6}>
					<div className="stack">
						<object
							data={require('../../assets/web-developer.svg')}
							width="200"
							height="200"
						>
							Web development Image
						</object>
						<p>
							I spend most of my time on web development. I am familiar with a
							variety of Web development technologies. I mostly work with
							<mark> JavaScript </mark>, <mark>Node.js </mark>,{' '}
							<mark>React </mark>, <mark>Redux </mark>, <mark>TypeScript </mark>
							, <mark>React Native </mark>, <mark>Firebase </mark>,{' '}
							<mark>MongoDB </mark> and <mark>Google Cloud Platform</mark>
						</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="stack">
						<object
							data={require('../../assets/ml.svg')}
							width="200"
							height="200"
						>
							Web development Image
						</object>
						<p>
							Apart from web development, I am interested in mobile development
							with <mark>Dart </mark> and <mark> Flutter</mark> and Machine
							Learning programming with <mark>Python. </mark>I also play around
							with <mark>Rust</mark> occassionally and I find it very
							interesting.
						</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="stack">
						<object
							data={require('../../assets/circuits.svg')}
							width="200"
							height="200"
						>
							Web development Image
						</object>
						<p>
							I also like trying out projects with <mark>Arduino</mark> and{' '}
							<mark>IOT </mark> development boards to take a break from all the
							software hacking.
						</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div className="stack">
						<object
							data={require('../../assets/leisure.svg')}
							width="200"
							height="200"
						>
							Web development Image
						</object>
						<p>
							I spend most of my free time listening to <mark>music </mark>,
							writing <mark>sonnets </mark>, reading personal growth{' '}
							<mark>books </mark> and socializing with my <mark>family </mark>{' '}
							and
							<mark> friends </mark> <span className="fam">❤</span>
						</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutPage;
