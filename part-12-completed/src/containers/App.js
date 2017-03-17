import React, { PropTypes, Component } from 'react';
import './App.css';
import bgImage from './ignasi_pattern_s.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Home';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class App extends Component {
	render() {
		return (
			<div className="App" style={{backgroundImage: `url(${bgImage})`}}>
				<Header />
				<div className="page-header">
					<h1>{getNiceName(this.props.routes)}{' '}
						<small>page</small>
					</h1>
				</div>
				<div className="container App-content">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default App;
