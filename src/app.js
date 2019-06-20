// External Dependencies
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { connect } from 'react-redux';

// Local Dependencies
// import loadIcons from '@src/config/icons';
import AppRouter from '@src/config/routing/AppRouter';
import styles from '@src/app.styles';

export class App extends React.Component {
	constructor(props) {
		super(props);
		// loadIcons();
	}

	render() {
		const { classes } = this.props;
		const title = 'My Minimal React Webpack Babel Setup';

		return (
			<div className={classes.root}>
				<AppRouter />
				{/* {title} */}
			</div>
		);
	}
}

// const mapStateToProps = storeState => ({
//   isAuthenticated: storeState.auth.isAuthenticated
// });

export default withStyles(styles, { withTheme: true })(App);
