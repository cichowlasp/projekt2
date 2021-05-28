import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

const Router = () => {
	return (
		<Dashboard title={'Admin Panel'}>
			<BrowserRouter>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</Dashboard>
	);
};

export default Router;
