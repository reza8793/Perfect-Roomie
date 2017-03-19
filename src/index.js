import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, hashHistory,browserHistory } from 'react-router';
import makeRoutes from './routes.jsx';


const appEntry = <Router history={hashHistory}>{makeRoutes()}</Router>;
ReactDOM.render(
	appEntry,
	document.getElementById('root')
);
