import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router';


const logodivStyle = {
  color: "white",
  backgroundColor: "#F2552C",
  fontSize: "28",
  display: "inline-block",
  fontFamily: "Helvetica"
};


const divStyle = {
  color: 'red',
  fontSize: "28",
  display: "inline-block"
};

const divStyle1 = {
  color: 'white',
  fontSize: "28",
   //backgroundColor: "#F2552C",
  display: "inline-block",
  fontFamily: "Helvetica"
};

export default function() {
	return <nav className="navbarDefault">
		{/*<div className="container-fluid navbar-custom"> */}
		<div className={`container-fluid ${styles.navbarCustom}`}>


			<div className="row">
				<div className="navbar-header">
				
					<div className="col-xs-12">
						<Link style={logodivStyle} className="navbar-brand" to="/" id="logo">Perfect Roomie</Link>
						
					</div>
				</div>

				<div  style={divStyle} className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul style={divStyle} className="nav navbar-nav navbar-right navbar-right-custom">
				

						<li><Link style={divStyle1} to="/"> Home</Link></li>
						
						<li><Link style={divStyle1} to="/survey">Survey</Link></li>
						<li><Link  style={divStyle1}to="/">Contact Us</Link></li>

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

				<form action="fb/getUserInfo" method="get">
						<button type="submit">Get User Info</button>
				</form>
				

			</div>
		</div>
	</nav>;
}
