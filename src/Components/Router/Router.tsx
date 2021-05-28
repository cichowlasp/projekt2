import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

const Router = () => {
	return (
		<Dashboard title={'Admin Panel'}>
			<HashRouter>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</HashRouter>
		</Dashboard>
	);
};

export default Router;
