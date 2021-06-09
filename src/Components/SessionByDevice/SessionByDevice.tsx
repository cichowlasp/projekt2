import React, { useContext, useState } from 'react';
import { PieChart, Sector, Pie, Cell } from 'recharts';
import styled, { ThemeContext } from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SessionByDevice: React.FC<{
	data: {
		name: string;
		value: number;
	}[];
}> = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const {
		colors: { green, yellow, orange, greyLight: grey, black },
	} = useContext(ThemeContext);

	const COLORS = [green, grey, orange, yellow];

	const renderActiveShape = (props: any) => {
		const {
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill,
			payload,
		} = props;

		return (
			<g>
				<text x={cx} y={cy} dy={8} textAnchor='middle' fill={black}>
					{`${payload.value}%`}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill={fill}
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius - 20}
					outerRadius={outerRadius}
					fill={fill}
				/>
			</g>
		);
	};

	return (
		<Wrapper>
			<div>
				<PieChart width={150} height={150}>
					<Pie
						data={data}
						innerRadius={52}
						outerRadius={70}
						activeIndex={activeIndex}
						activeShape={renderActiveShape}
						dataKey='value'
						onMouseEnter={(_, index) => setActiveIndex(index)}>
						{data.map((_, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</div>
			<Info>
				<Title>
					<div>Session by Device</div>
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
	overflow-y: auto;
`;

const Info = styled.div`
	margin-left: 1rem;
`;

const Title = styled.div`
	font-weight: 600;
	color: ${(props) => props.theme.colors.black};
	font-size: 1.5rem;
`;

interface ActivityChartLegendProps {
	color?: string;
}

const ActivityChartLegend = styled.span<ActivityChartLegendProps>`
	display: flex;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.black};
	align-items: center;
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
