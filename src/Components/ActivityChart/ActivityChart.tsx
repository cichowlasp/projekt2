import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianAxis,
	LabelList,
} from 'recharts';

const ActivityChart = () => {
	const theme = useContext(ThemeContext);

	const axisStyle = {
		fontSize: '0.8rem',
		fill: theme.colors.greyDark,
		fontWeight: '600',
	};

	const renderStyledLabel = (props: any) => {
		const { x, y, width, value } = props;
		const radius = 20;
		return (
			<g>
				<Name
					x={x + width / 2}
					y={y - radius}
					fill='#fff'
					textAnchor='middle'
					dominantBaseline='middle'>
					{`${value} k`}
				</Name>
			</g>
		);
	};

	const data = [
		{ name: 'Sat', uv: 2.3, pv: 4.3, amt: 2400 },
		{ name: 'Sun', uv: 2.9, pv: 4.8, amt: 2400 },
		{ name: 'Mon', uv: 3.1, pv: 1.2, amt: 2400 },
		{ name: 'Tue', uv: 4.2, pv: 3.9, amt: 2400 },
		{ name: 'Wed', uv: 5.3, pv: 3.2, amt: 2400 },
		{ name: 'Thu', uv: 3.3, pv: 4.4, amt: 2400 },
		{ name: 'Fri', uv: 4.3, pv: 2.9, amt: 2400 },
	];
	return (
		<Wrapper>
			<BarChart
				barSize={40}
				barGap='10%'
				width={900}
				height={300}
				data={data}>
				<XAxis
					padding={{ left: 10 }}
					dataKey='name'
					axisLine={false}
					tickLine={false}
					tick={axisStyle}
				/>
				<YAxis
					padding={{ bottom: 10 }}
					domain={[0, (dataMax: number) => Math.ceil(dataMax)]}
					axisLine={false}
					tickLine={false}
					tick={axisStyle}
					tickFormatter={(number) => `${number} k`}
				/>
				<Tooltip
					wrapperStyle={{
						borderRadius: 1000,
					}}
					cursor={{
						fill: theme.colors.white,
					}}
				/>
				<CartesianAxis stroke='#ccc' strokeDasharray='5 5' />
				<Bar dataKey='uv' fill={theme.colors.orange} radius={10}>
					<LabelList
						dataKey='uv'
						content={(props) => renderStyledLabel(props)}
					/>
				</Bar>

				<Bar dataKey='pv' fill={theme.colors.blue} radius={10}>
					<LabelList
						dataKey='uv'
						position='top'
						content={(props) => renderStyledLabel(props)}
					/>
				</Bar>
			</BarChart>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	overflow-y: hidden;
	overflow-x: auto;
`;

const Name = styled.text`
	font-size: 0.8rem;
	font-weight: 600;
	fill: ${(props) => props.theme.colors.greyDark};
`;

export default ActivityChart;
