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

interface FuncProps {
	data: {
		name: string;
		uv: number;
		pv: number;
	}[];
}

const ActivityChart: React.FC<FuncProps> = ({ data }) => {
	const [show, setShow] = useState<boolean>(false);
	const [label0, setLabel0] = useState<string>('');
	const [label1, setLabel1] = useState<string>('');
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
			setLabel0(payload[0].value);
			setLabel1(payload[1].value);
			return <div />;
		} else {
			setShow(false);
			return <div />;
		}
	};
	const renderStyledLabel = (props: any) => {
		const { x, y, width, value } = props;

		const radius = 15;
		return (
			<Name
				x={Number(x) + Number(width) / 2}
				y={Number(y) - radius}
				fill='#fff'
				textAnchor='middle'
				dominantBaseline='middle'>
				{show && (label0 === value || label1 === value)
					? `${value} k`
					: ''}
			</Name>
		);
	};

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
						dataKey='pv'
						position='top'
						content={(props) => renderStyledLabel(props)}
					/>
				</Bar>
			</BarChart>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 1rem;
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
