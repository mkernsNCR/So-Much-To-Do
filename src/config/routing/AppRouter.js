import React from 'react';
import Loadable from 'react-loadable';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { NotFoundPage, Login, Loading } from '@src/screens';
import { PrivateRoute, PublicRoute } from '@src/config/routing/types';
import Root from '@src/config/routing/root';

const Dashboard = Loadable({
	loader: () => import('@src/screens/Dashboard'),
	loading: () => <Loading />
});

const AppRouter = () => (
	<Router>
		<div style={{ width: '100vw' }}>
			<Switch>
				<Route path="/" component={Root} exact />
				<Route path="/home" component={Dashboard} />
				<Route path="/login" component={Login} exact />
				<Route component={NotFoundPage} />
				{/* <PrivateRoute path="/" component={Root} exact={true} /> */}
				{/* <PrivateRoute path="/home" component={Dashboard} /> */}
				{/* <PublicRoute path="/login" component={Login} exact={true} /> */}
				{/* <PublicRoute component={NotFoundPage} /> */}
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
