import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const getChar = (
	data: { name: string; percents: number }[],
	color: string,
	grey: string
) => {
	return (
		<BarChart layout='vertical' width={290} height={17} data={data}>
			<XAxis domain={[0, 100]} hide type='number' />
			<YAxis hide dataKey='name' type='category' />
			<Bar
				dataKey='percents'
				fill={color}
				background={{
					fill: grey,
					radius: 10,
				}}
				radius={15}
			/>
		</BarChart>
	);
};

const TopReferals = () => {
	const { colors } = useContext(ThemeContext);
	const data1 = [{ name: '1', percents: 80 }];
	const data2 = [{ name: '2', percents: 40 }];
	const data3 = [{ name: '3', percents: 50 }];
	return (
		<Wrapper>
			<Container>
				<Logo color={colors.green} />
				<div>
					<Chart>
						<span>Internal Referal</span>
						<Color color={colors.green}>{data1[0].percents}%</Color>
					</Chart>
					<div>{getChar(data1, colors.green, colors.greyFont)}</div>
				</div>
			</Container>
			<Container>
				<Logo color={colors.orange} />
				<div>
					<Chart>
						<span>Direct Traffic</span>
						<Color color={colors.orange}>
							{data2[0].percents}%
						</Color>
					</Chart>
					<div>{getChar(data2, colors.orange, colors.greyFont)}</div>
				</div>
			</Container>
			<Container>
				<Logo color={colors.yellow} />
				<div>
					<Chart>
						<span>Internal Referal</span>
						<Color color={colors.yellow}>
							{data3[0].percents}%
						</Color>
					</Chart>
					<div>{getChar(data3, colors.yellow, colors.greyFont)}</div>
				</div>
			</Container>
		</Wrapper>
	);
};

interface StyledProps {
	color: string;
}

const Logo = styled.div<StyledProps>`
	height: 2.5rem;
	width: 2.5rem;
	background-color: ${({ color }) => color};
	border-radius: 0.7rem;
	box-shadow: ${({ color }) => `0 1rem 1rem -0.7rem ${color}`};
	margin-right: 1rem;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const Chart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 0.5rem 0.5rem 0.5rem;
	font-size: 0.9rem;
	font-weight: 500;
`;

const Color = styled.span<StyledProps>`
	color: ${(props) => props.color};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 10rem;
`;

export default TopReferals;
