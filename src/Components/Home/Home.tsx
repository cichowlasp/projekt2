import React, { useContext } from 'react';
import ActivityChart from '../ActivityChart/ActivityChart';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Comment from '../Comment/Comment';
import styled, { ThemeContext } from 'styled-components';
import User from '../User/User';
import TopReferals from '../TopReferals/TopReferals';
import SessionByDevice from '../SessionByDevice/SessionByDevice';
import SessionByCountry from '../SessionByCountry/SessionByCountry';

const Home = () => {
	const theme = useContext(ThemeContext);

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

	const SessionData = [
		{ name: 'Green', value: 75 },
		{ name: 'Yellow', value: 20 },
		{ name: 'Orange', value: 70 },
		{ name: 'Grey', value: 20 },
	];

	return (
		<>
			<Section title='Activities' option={<ArrowForwardIcon />}>
				{activities.map((el) => (
					<Card
						color={el.color}
						number={el.number}
						percentage={el.percentage}
						text={el.text}
					/>
				))}
			</Section>
			<Section
				title='Activity Chart'
				option={
					<div>
						<ActivityChartLegend>
							<FiberManualRecordIcon
								htmlColor={theme.colors.orange}
							/>
							Client
						</ActivityChartLegend>
						<ActivityChartLegend>
							<FiberManualRecordIcon
								htmlColor={theme.colors.blue}
							/>
							Designer
						</ActivityChartLegend>
					</div>
				}>
				<ActivityChart data={data} />
				<OptionWrapper>
					<Option active>
						<RadioButtonCheckedIcon />{' '}
						<OptionText active>Daily</OptionText>
					</Option>
					<Option>
						<RadioButtonCheckedIcon />{' '}
						<OptionText>Weekly</OptionText>
					</Option>
					<Option>
						<RadioButtonCheckedIcon />{' '}
						<OptionText>Monthly</OptionText>
					</Option>
				</OptionWrapper>
			</Section>
			<Section
				title='Recent Review'
				option={
					<SortButton>
						Sort <KeyboardArrowDownIcon />
					</SortButton>
				}>
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
			<Section
				title='Recent User'
				option={
					<SortButton>
						Sort <KeyboardArrowDownIcon />
					</SortButton>
				}>
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
			<Section title='Top Referals'>
				<TopReferals />
			</Section>
			<Section>
				<SessionByDevice data={SessionData} />
			</Section>
			<Section>
				<SessionByCountry />
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

interface OptionProps {
	active?: boolean;
}

const Option = styled.span<OptionProps>`
	display: flex;
	color: ${(props) =>
		props.active ? props.theme.colors.blue : props.theme.colors.greyFont};
`;
const OptionWrapper = styled.span`
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	width: 18rem;
	justify-content: space-between;
	margin-top: 1rem;
`;

const OptionText = styled.div<OptionProps>`
	margin-left: 0.5rem;
	color: ${(props) =>
		props.active ? props.theme.colors.black : props.theme.colors.greyFont};
`;

interface ActivityChartLegendProps {
	color?: string;
}

const ActivityChartLegend = styled.span<ActivityChartLegendProps>`
	display: flex;
	font-size: 1rem;
	color: ${(props) => props.color};
`;

const SortButton = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	padding: 0.2rem 0.2rem 0.2rem 0.5rem;
	background-color: ${(props) => props.theme.colors.white};
	font-size: 0.8rem;
	border-radius: 0.4rem;
	border: 2px solid ${(props) => props.theme.colors.greyLight};
	&:hover {
		cursor: pointer;
	}
`;

export default Home;
