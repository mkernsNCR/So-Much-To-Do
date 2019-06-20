import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		useNextVariants: true,
		fontSize: 20,
		fontFamily: 'Sarabun, Helvetica, Arial, sans-serif',
		button: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		},
		body2: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		},
		caption: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		},
		title: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		},
		subheading: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		},
		body1: {
			fontFamily: 'Thasadith, Helvetica, Arial, sans-serif'
		}
	},
	table: {
		spacing: 36,
		paginationHeight: 60
	},
	palette: {
		type: 'light',
		text: {
			primary: '#000'
		},
		background: {
			paper: '#fff',
			default: '#EFEFF0',
			accent: '#5E92AB',
			shade: '#2B3247',
			success: '#3c9568',
			warning: '#b98530'
		},
		primary: {
			light: '#4f7ecc',
			main: '#01529b',
			dark: '#002b6c',
			contrastText: '#fff'
		},
		secondary: {
			light: '#fffe50',
			main: '#f0cb02',
			dark: '#b99b00',
			contrastText: '#000'
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff'
		},
		appBar: {
			defaultHeight: 64
		},
		tabHeader: {
			defaultHeight: 48
		},
		// Used by `getContrastText()` to maximize the contrast between the background and
		// the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	}
});
