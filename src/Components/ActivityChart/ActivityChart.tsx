import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	LabelList,
} from 'recharts';

const ActivityChart = () => {
	const [show, setShow] = useState<boolean>(false);
	const [label, setLabel] = useState<string>('');
	const theme = useContext(ThemeContext);

	const axisStyle = {
		fontSize: '0.8rem',
		fill: theme.colors.greyDark,
		fontWeight: '600',
	};

	const CustomTooltip = (props: any) => {
		const { active, payload } = props;
		if (active && payload && payload.length) {
			setShow(true);
			setLabel(payload[0].value);
			return <div />;
		} else {
			setShow(false);
			return <div />;
		}
	};
	const renderStyledLabel = (props: any) => {
		const { x, y, width, value } = props;

		const radius = 15;
		console.log(value, label);
		return (
			<Name
				x={Number(x) + Number(width) / 2}
				y={Number(y) - radius}
				fill='#fff'
				textAnchor='middle'
				dominantBaseline='middle'>
				{show && label === value ? `${value} k` : ''}
			</Name>
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
				<CartesianGrid
					vertical={false}
					strokeDasharray='5 5'
					stroke={theme.colors.greyLight}
				/>
				<Tooltip
					cursor={{
						fill: theme.colors.white,
						radius: 15,
						height: 295,
						y: 0,
					}}
					content={(props) => CustomTooltip(props)}
				/>
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
	font-size: 0.75rem;
	font-weight: 500;
	fill: ${(props) => props.theme.colors.greyDark};
	z-index: 3;
`;

export default ActivityChart;
