import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<Router>
				<Route component={App} />
			</Router>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
