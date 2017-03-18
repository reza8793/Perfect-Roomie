import React from 'react';
import { Route, IndexRoute } from 'react-router';



import Home from './containers/Home.jsx';
import Skills from './containers/Skills.jsx';

export default () => {
	return <Route path="/">
		<IndexRoute component={Home}/>

		<Route path="/skills" component={Skills}/>
	</Route>;
};
