import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled, { ThemeContext } from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SessionByDevice = () => {
	const {
		colors: { green, yellow, orange, greyLight: grey },
	} = useContext(ThemeContext);
	const data = [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 200 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	];
	const COLORS = [green, grey, orange, yellow];
	return (
		<Wrapper>
			<div>
				<ResponsiveContainer width={150} height={150}>
					<PieChart>
						<Pie
							data={data}
							innerRadius={52}
							outerRadius={70}
							dataKey='value'>
							{data.map((_, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<Info>
				<Title>
					<div>Sesion by Device</div>
				</Title>
				<DotsWrapper>
					<CategorySeparator>
						<ActivityChartLegend>
							<FiberManualRecordIcon htmlColor={green} />
							Mobile
						</ActivityChartLegend>
						<ActivityChartLegend>
							<FiberManualRecordIcon htmlColor={yellow} />
							Tab
						</ActivityChartLegend>
					</CategorySeparator>
					<CategorySeparator>
						<ActivityChartLegend>
							<FiberManualRecordIcon htmlColor={orange} />
							Desktop
						</ActivityChartLegend>
						<ActivityChartLegend>
							<FiberManualRecordIcon htmlColor={grey} />
							Others
						</ActivityChartLegend>
					</CategorySeparator>
				</DotsWrapper>
			</Info>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const Info = styled.div`
	margin-left: 1rem;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.5rem;
`;

interface ActivityChartLegendProps {
	color?: string;
}

const ActivityChartLegend = styled.span<ActivityChartLegendProps>`
	display: flex;
	font-size: 1rem;
	color: ${(props) => props.color};
`;

const DotsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
	justify-content: space-between;
	height: 4rem;
`;

const CategorySeparator = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
`;

export default SessionByDevice;
