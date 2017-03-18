import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';

const PORTFOLIO_ITEMS = [
	{
		title: 'Dio - Holy Diver',
		img: 'https://pbs.twimg.com/profile_images/548158074607792128/djnIhiKk.jpeg',
		description: 'Shiny diamonds, Like the eyes of a cat in the black and blue'
	},
	{
		title: 'Guardians of the Galaxy - Vol. 2',
		img: 'https://pbs.twimg.com/profile_images/791864053161308160/CWcPKPDx_400x400.jpg',
		description: 'I am Groot.'
	},
	{
		title: 'Game of Thrones',
		img: 'https://pbs.twimg.com/profile_images/702545332475981824/Mg7TpOaw_400x400.jpg',
		description: 'Hodor? Hodor.'
	}
];

class Portfolio extends Component {
	render() {
		return <div className="row">
			<h2>Some things that I've made</h2>
			<PortfolioItem
				title="My React Title"
				description="some really cool description"
				imgSource="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
			/>
			<PortfolioItem
				title="Mr Robot"
				description="Democracy has been hacked"
				imgSource="https://pbs.twimg.com/profile_images/764857977547460609/kU8suDXL_400x400.jpg"
			/>
			{PORTFOLIO_ITEMS.map((item, index) => {
				return <PortfolioItem
					key={index}
					title={item.title}
					description={item.description}
					imgSource={item.img}
				/>;
			})}
		</div>;
	}
}

export default Portfolio;
