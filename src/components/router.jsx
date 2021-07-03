import React, { useState, useEffect } from 'react';
import Header from './header';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TypePage from './typePages/typePage';
import HomePage from './homePage'
import AllTypes from './typePages/allTypes';

function Router() {

	const [searchCriteria, setSearchCriteria] = useState("")

	return (
		<div>
			<Header />
			<Navbar setSearchCriteria={setSearchCriteria} />
			<BrowserRouter>
				<Switch>
					<Route exact={true} path={["/myPlants", "/"]}>
						<HomePage searchCriteria={searchCriteria} />
					</Route>
					<Route path="/settings" />
					<Route path="/AllTypes">
						<AllTypes />
					</Route>
					<Route path="/:plant">
						<TypePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>

	)
}

export default Router;