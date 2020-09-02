import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			light: '#13AA52', //#13AA52
			main: '#13AA52',
		},
		secondary: {
			main: '#fff',
			contrastText: '#222',
		},
		contrastThreshold: 7,
		tonalOffset: 0.2,
	},
});

export default theme;
