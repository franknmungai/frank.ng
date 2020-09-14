import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import theme from './theme';
import ReactDOM from 'react-dom';
import App from './App';
import store, { persistor } from './redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<MuiThemeProvider theme={theme}>
					<Router>
						<Route component={App} />
					</Router>
				</MuiThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
