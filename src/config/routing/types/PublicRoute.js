// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { Grid } from '@material-ui/core';
// import { connect } from 'react-redux';

// export const PublicRouteComponent = ({
// 	isAuthenticated,
// 	component: Component,
// 	...rest
// }) => {
// 	const encloseNav = props =>
// 		!isAuthenticated ? (
// 			<React.Fragment>
// 				<Grid container>
// 					<Grid item xs={12} md={12} lg={12}>
// 						<React.Fragment>
// 							<Component {...props} />
// 						</React.Fragment>
// 					</Grid>
// 				</Grid>
// 			</React.Fragment>
// 		) : (
// 			<Redirect to="/home" />
// 		);
// 	return <Route {...rest} render={encloseNav} />;
// };

// const mapStateToProps = state => ({
// 	isAuthenticated: state.auth.isAuthenticated
// });

// export const PublicRoute = connect(
// 	mapStateToProps,
// 	null
// )(PublicRouteComponent);

// export default PublicRoute;
