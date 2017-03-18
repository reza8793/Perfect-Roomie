import React, { Component, PropTypes } from 'react';
import './PortfolioItem.css';

class PortfolioItem extends Component {
	constructor(props) {
		// calls the Component constructor function
		super(props);

		// the starting state of the `PortfolioItem` Component
		this.state = {
			isShowingDescription: false
		};

		// used to make the keyword `this` work inside the `toggleDescription` class function
		this.toggleDescription = this.toggleDescription.bind(this);
	}

	toggleDescription() {
		// flip the boolean value to the opposite option - true becomes false, false becomes true
		console.log('toggling description, currently visible:', this.state.isShowingDescription);
		this.setState({
			isShowingDescription: !this.state.isShowingDescription
		});
	}

	render() {
		return <div className="col-sm-6 col-md-4 PortfolioItem">
			<div className="thumbnail">
				<img src={this.props.imgSource} alt={this.props.title}/>
				<div className="caption">
					<h3>{this.props.title}</h3>
					<p><a onClick={this.toggleDescription} className="btn btn-primary" role="button">See More</a></p>
				</div>
				{
					this.state.isShowingDescription ?
						<p className="PortfolioItem-desc">{this.props.description}</p>
						: <p className="PortfolioItem-desc">&nbsp;</p>
				}
			</div>
		</div>;
	}
}

PortfolioItem.propTypes = {
	imgSource: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default PortfolioItem;
