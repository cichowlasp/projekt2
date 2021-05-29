import React from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Comment from '../Comment/Comment';
import styled from 'styled-components';

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

	const comments = [
		{
			stars: 5,
			name1: 'Julia',
			name2: 'Piotr',
			text: '"She is really creative designer"',
			color: '#01BE83',
		},
		{
			stars: 3,
			name1: 'Paweł',
			name2: 'Karol',
			text: '"He is the best"',
			color: '#FF7833',
		},
		{
			stars: 1,
			name1: 'Kuba',
			name2: 'Maciej',
			text: '"Love him"',
			color: '#315AFE',
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
				{comments.map((el, index) => (
					<Comment
						stars={el.stars}
						name1={el.name1}
						name2={el.name2}
						text={el.text}
						reverse={index % 2 !== 0}
						color={el.color}
					/>
				))}
				<Square>
					<Link>View All Reviews</Link>
				</Square>
			</Section>
		</>
	);
};

const Square = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.white};
	justify-content: center;
	align-items: center;
	margin-left: 1rem;
	border: ${(props) => `0.5px solid ${props.theme.colors.greyLight}`};
	border-radius: 0.7rem;
	padding: 1rem;
`;

const Link = styled.div`
	text-decoration: underline;
	font-size: 0.8rem;
	color: ${(props) => props.theme.colors.blue};
`;

export default Home;
