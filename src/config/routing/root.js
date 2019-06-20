import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '@src/screens/Login';

const Root = () => {
	return (
		<div>
			<Login />
		</div>
	);
};

// export const Root = props => {
// 	const { isAuthenticated } = props;
// 	return isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/signin" />;
// };

// const mapStateToProps = state => ({
// 	isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps)(Root);
export default Root;
