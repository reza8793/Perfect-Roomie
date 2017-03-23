import React, { Component } from 'react';
import styles from "./Home.css";
import DuckImage from "./roomie.jpg";


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


		// var imgStyle = {
  //         backgroundImage: "url(" + { DuckImage } + ")"
  //       			}

  

		return <div className= {styles.roomieDiv}>
		

				
			<h1>Perfect Roomie</h1>
			<h4> Looking for a compatible roommate through mutual friends ? Look no further </h4>
			<h4> Find your ideal roommate now !</h4>
			<div className="page-header">

			</div>

			{this.state.text}

			<div className={styles.formDiv}>

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
