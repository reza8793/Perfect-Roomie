import React, { Component } from 'react';

class Home extends Component {


	constructor(){
		super();
		this.state = {
			text: "initial text"
		};
	}

	clicked() {
		this.setState ({ text:this.refs.textBox.value});
		window.location = '/skills';
	}



	render() {
		return <div>
			<h1>Perfect Roomie</h1>
			<div className="page-header">
				
			</div>

			{this.state.text}

			<input ref="textBox" type="text" />

			<button onClick={ (e) => {this.clicked();}}> Enter Your location </button>

			<p>
		
				<button type="button" className="btn btn-lg btn-primary">Primary</button>
			</p>

			</div>;

		
	}
}

export default Home;
