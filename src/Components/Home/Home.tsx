import React from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Comment from '../Comment/Comment';
import styled from 'styled-components';
import User from '../User/User';
import ActivityChart from '../ActivityChart/ActivityChart';

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

	const users = [
		{
			fullName: 'Adam John',
			type: 'Client',
			email: 'adamj@gmail.com',
			color: '#01BE83',
		},
		{
			fullName: 'Smith Adam',
			type: 'Designer',
			email: 'smith@gmail.com',
			color: '#315AFE',
		},
		{
			fullName: 'Ronda',
			type: 'Client',
			email: 'ronda@gmail.com',
			color: '#23212C',
		},
	];

	const data = [
		{ name: 'Sat', uv: 2.3, pv: 4.3 },
		{ name: 'Sun', uv: 2.9, pv: 4.8 },
		{ name: 'Mon', uv: 3.1, pv: 1.2 },
		{ name: 'Tue', uv: 4.2, pv: 3.9 },
		{ name: 'Wed', uv: 5.3, pv: 3.2 },
		{ name: 'Thu', uv: 3.3, pv: 4.4 },
		{ name: 'Fri', uv: 4.3, pv: 2.9 },
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
			<Section title='Activity Chart'>
				<ActivityChart data={data} />
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
			<Section title='Recent User'>
				{users.map((el) => (
					<User
						fullName={el.fullName}
						type={el.type}
						email={el.email}
						color={el.color}
					/>
				))}
				<Dots>
					•<Blue>•</Blue>•
				</Dots>
			</Section>
		</>
	);
};

const Square = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.white};
	justify-content: center;
	align-items: center;
	border: ${(props) => `1px solid ${props.theme.colors.greyLight}`};
	border-radius: 0.7rem;
	padding: 1rem 0;
	margin-top: 1rem;
`;

const Link = styled.div`
	text-decoration: underline;
	font-size: 0.8rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.blue};
	&:hover {
		cursor: pointer;
	}
`;

const Dots = styled.div`
	display: flex;
	font-size: 2.5rem;
	place-self: center;
	margin-top: 1rem;
	width: 100%;
	justify-content: center;
	color: ${({ theme }) => theme.colors.greyFont};
`;

const Blue = styled.div`
	color: ${({ theme }) => theme.colors.blue};
`;

export default Home;
