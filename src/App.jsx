import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className="App">
			Hello world
			<Router>
				<Route path="/" component={HomePage} exact />
			</Router>
		</div>
	);
}

export default App;
