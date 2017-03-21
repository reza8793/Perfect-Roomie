import React, { Component } from 'react';
import './Home.css';
// import Matching from "../../controllers/algorithm.js"

class Home extends Component {

	constructor(){
		super();
		this.state = {
			text: "initial text"
		};
	}

	clicked() {
		this.setState ({ text:this.refs.textBox.value});
		window.location = '/#/survey';
	}



	render() {
		return <div className="roomieDiv">
			<h1>Perfect Roomie</h1>
			<h4> Looking for a compatible roommate through mutual friends ? Look no further </h4>
			<h4> Find your ideal roommate now !</h4>
			<div className="page-header">

			</div>

			{this.state.text}

			<div className="formDiv">

			<input ref="textBox" type="text" />

			<p></p>

			</div>

			<p>

				<button type="button" className="btn btn-lg btn-primary" onClick={ (e) => {this.clicked();}}> Enter Your location</button>
			</p>

			</div>;


	}
}

export default Home;
