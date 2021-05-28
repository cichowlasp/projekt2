import React from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Comment from '../Comment/Comment';

const Home = () => {
	const activities = [
		{
			color: '#01BE83',
			number: '18,989',
			percentage: '+8.4%',
			text: 'Average Rating',
		},
		{
			color: '#315AFE',
			number: '20,124',
			percentage: '-2.4%',
			text: 'Total Rating',
		},
		{
			color: '#DA5853',
			number: '34,123',
			percentage: '+6.4%',
			text: 'New Reviews',
		},
		{
			color: '#FFC726',
			number: '43,234',
			percentage: '-4.4%',
			text: 'Totall Reviews',
		},
	];

	return (
		<>
			<Section title='Activities'>
				{activities.map((el) => (
					<Card
						color={el.color}
						number={el.number}
						percentage={el.percentage}
						text={el.text}
					/>
				))}
			</Section>
			<Section title='Recent Review'>
				<Comment />
			</Section>
		</>
	);
};

export default Home;
