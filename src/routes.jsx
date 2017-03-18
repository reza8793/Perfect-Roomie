import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import App from './containers/App.js';
import Home from './containers/Home.jsx';
// import About from './containers/About.jsx';
// import Portfolio from './containers/Portfolio.jsx';
// import Skills from './containers/Skills.jsx';

export default () => {
	return <Route path="/">
		<IndexRoute component={Home}/>

		{/* <Route path="/portfolio" component={Portfolio}/>
		<Route path="/about" component={About}/>
		<Route path="/skills" component={Skills}/> */}
	</Route>;
};
