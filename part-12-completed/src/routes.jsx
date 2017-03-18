import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Skills from './containers/Skills';

export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={Home}/>

		<Route path="/portfolio" component={Portfolio}/>
		<Route path="/about" component={About}/>
		<Route path="/skills" component={Skills}/>
	</Route>;
};
