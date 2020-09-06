// React Router configuration
import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './About';
import Articles from './Articles';
import Projects from './Projects';

export default () => (
	<div>
		<Route path="/" exact component={AboutPage} />
		<Route path="/articles" component={Articles} />
		<Route path="/code" component={Projects} />
	</div>
);
