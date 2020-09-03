import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
