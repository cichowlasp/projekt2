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
import {
	data,
	activities,
	comments,
	users,
	MapData,
	SessionData,
} from '../../utils/data';

const Home = () => {
	const theme = useContext(ThemeContext);

	return (
		<HomeWrapper>
			<LeftSide>
				<Section title='Activities' option={<ArrowForwardIcon />}>
					<Activities>
						{activities.map((el) => (
							<Card
								color={el.color}
								number={el.number}
								percentage={el.percentage}
								text={el.text}
							/>
						))}
					</Activities>
				</Section>
				<Section
					title='Activity Chart'
					option={
						<Legend>
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
						</Legend>
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
			</LeftSide>
			<RightSide>
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
					<SessionByCountry data={MapData} />
				</Section>
			</RightSide>
		</HomeWrapper>
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
	align-items: center;
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

const HomeWrapper = styled.div`
	overflow-y: scroll;
	white-space: nowrap;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	padding-top: 10rem;
	justify-content: center;
	@media (min-width: 1000px) {
		flex-direction: row;
		padding-top: 6rem;
	}
`;

const RightSide = styled.div`
	@media (min-width: 1000px) {
		width: 30vw;
	}
`;
const LeftSide = styled.div`
	@media (min-width: 1000px) {
		width: 65vw;
	}
`;

const Activities = styled.div`
	padding: 1rem 0;
	@media (min-width: 1000px) {
		overflow-y: auto;
		display: flex;
		flex-direction: row;
	}
`;

const Legend = styled.div`
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 12rem;
		justify-content: space-between;
	}
`;

export default Home;
