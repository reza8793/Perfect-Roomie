import React, { Component } from 'react';

class Lotto extends Component {
	constructor(props) {
		// calls the Component constructor function
		super(props);

		// the starting state of the `Lotto` Component
		this.state = {
			lottoNumber: null
		};

		// used to make the keyword `this` work inside the `onGenerateClick` class function
		this.onGenerateClick = this.onGenerateClick.bind(this);
	}

	onGenerateClick() {
		this.setState({
			lottoNumber: this.generateNewLottoNumber()
		});
	}

	generateNewLottoNumber() {
		// Create a string which will hold the lottery number
		var lottoNumber = '';
		var random;

		// Create a loop that generates 9 separate numbers
		for (var i = 0; i < 9; i++) {
			random = Math.floor(Math.random() * 9) + 1;

			// Add to the lottery number
			lottoNumber = random + lottoNumber;
		}

		return lottoNumber;
	}

	render() {
		return <div>
			<h2>Show me the lotto number!</h2>
			<button type="button" className="btn btn-sm btn-success" onClick={this.onGenerateClick}>
				generate new one
			</button>
			<h4>Your lotto number is:</h4>
			<strong>
				{
					this.state.lottoNumber ?
						this.state.lottoNumber :
						'Click the button first!'
				}
			</strong>
		</div>;
	}
}

export default Lotto;
