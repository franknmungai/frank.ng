import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div className="home">
			<div className="logo">
				<div className="outer">
					<div className="inner">F</div>
				</div>
			</div>
			<h1>Frank.Pad</h1>
			<p className="intro">
				<h1>Meet Frank</h1>, a software developer and engineering student based
				in Nairobi, Kenya. I created this blog to share my knowledge, concepts,
				code, ideas, resources and jokes with friends such as you.
			</p>
			<p className="stack">
				I spent most of my time on web development and I am familiar with a
				variety of Web development technologies. I mostly work with JavaScript,
				Node.js, React, Redux, TypeScript, React Native, Firebase and MongoDB.
			</p>
			<p>
				Apart from web development, I am also interested in mobile development
				with Dart and Flutter and Machine Learning programming with Python
			</p>
			<p>
				I also like working with Microcontrollers and IOT development boards to
				take a break from all the software hacking{' '}
			</p>
			<p>
				I spend most of my free time listening to music, writing Poetry, reading
				personal growth books and socializing with friends
			</p>
		</div>
	);
};

export default HomePage;
