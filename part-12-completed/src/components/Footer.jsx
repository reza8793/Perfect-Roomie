import React from 'react';
import linkRun from './link-run.gif';
import { Link } from 'react-router';
import './Footer.css';

export default function() {
	return <footer className="Footer">
		<ul className="Footer-links">
			<li>
				<a href="/">home</a>
			</li>
			<li>
				<a href="/about">about</a>
			</li>
			<li>
				<a href="/portfolio">portfolio</a>
			</li>
			<li className="Footer-link-triforce">
				<img src={linkRun} alt="link running"/>
				<ul>
					<li> Using the power of <strong>Link</strong>, go to the:</li>
					<li><Link to="/">homepage</Link>!</li>
					<li><Link to="/about">about page</Link>!</li>
					<li><Link to="/portfolio">portfolio page</Link>!</li>
				</ul>
			</li>
		</ul>
		<p className="Footer-copyright">&copy; 2017 The internet</p>
	</footer>;
}
