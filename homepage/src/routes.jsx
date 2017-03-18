import React from 'react';

import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import App from './containers/Home';

export default()=> {
	return <Route path="/" component={App}>

	<IndexRoute component={Home} />
	</Route>;
};


