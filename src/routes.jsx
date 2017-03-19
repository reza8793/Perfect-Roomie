import React from 'react';
import { Route, IndexRoute } from 'react-router';



import App from './containers/App.js';
import Home from './containers/Home.jsx';
import Survey from './containers/Survey.jsx';


// import Home from './containers/Home.jsx';
// import Skills from './containers/Skills.jsx';

export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={Home}/>

		<Route path="/survey" component={Survey}/>
	</Route>;
};
