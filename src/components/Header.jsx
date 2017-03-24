import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router';




export default function() {
	return <nav className="navbarDefault">
		{/*<div className="container-fluid navbar-custom"> */}
		<div className={`container-fluid ${styles.navbarCustom}`}>


			<div className="row">
				<div className="navbar-header">
				
					<div className="col-xs-12">
						<Link className="navbar-brand" to="/" id="logo">Perfect Roomie</Link>
						
					</div>
				</div>

				{/*<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">*/}

				<div className= {styles.baalDiv} id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right navbar-right-custom">
				

						<li><Link to="/"> Home</Link></li>
						
						<li><Link to="/survey">Survey</Link></li>
						<li><Link to="/">Contact Us</Link></li>

					</ul>
				</div>

				
				<form action="fb/friends/" method="get">
  					<button type="submit">friends</button>
				</form>
				
				<form action="db/userInsert/" method="post">
						<button type="submit">Post to db</button>
				</form>

				<form action="db/userSurveyRandom" method="post">
						<button type="submit">Seed Random Scores</button>
				</form>

				<form action="db/updateRoomieMatch" method="post">
						<button type="submit">score roomie matches</button>
				</form>

				<form action="db/getRoomieMatch" method="get">
						<button type="submit">pull roomie match</button>
				</form>

			


			</div>
		</div>
	</nav>;
}
