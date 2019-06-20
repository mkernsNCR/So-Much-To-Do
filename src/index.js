import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import AppComponent from '@src/app';
import Theme from '@src/config/theme';

const rootEl = document.getElementById('app');

const render = Component =>
	ReactDOM.render(
		<MuiThemeProvider theme={Theme}>
			<CssBaseline />
			<Component />
		</MuiThemeProvider>,
		rootEl
	);

render(AppComponent);

module.hot.accept();
