import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Section from '../Section/Section';

const Router = () => {
	return (
		<Dashboard title={'Admin Panel'}>
			<BrowserRouter>
				<Switch>
					<Route path='/'>
						<Section title='Activities'>
							<div>Hello World</div>
						</Section>
					</Route>
				</Switch>
			</BrowserRouter>
		</Dashboard>
	);
};

export default Router;
