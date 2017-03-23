import React, { PropTypes, Component } from 'react';

import styles from "./App.css";
//import style-loader from 'style-loader';
// import laImage from './la_wallpaper.jpg';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Home';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class App extends Component {
	render() {
		return (
			<div  className={styles.app} >

				<Header />
				
				<div className={`container ${styles.appContent}`}>
					{this.props.children}
				</div>
				{/*<Footer />*/}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default App;
