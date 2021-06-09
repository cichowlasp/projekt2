import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
const GetChar = (
	data: { name: string; percents: number }[],
	color: string,
	grey: string,
	title?: string
) => {
	return (
		<MaxWidth>
			<Chart>
				<span>{title}</span>
				<Color color={color}>{data[0].percents}%</Color>
			</Chart>
			<MaxWidth>
				<ResponsiveContainer width='100%' height={17}>
					<BarChart layout='vertical' data={data}>
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
				</ResponsiveContainer>
			</MaxWidth>
		</MaxWidth>
	);
};

interface StyledProps {
	color: string;
}

const Chart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 0.5rem 0.5rem 0.5rem;
	font-size: 0.9rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.black};
`;

const MaxWidth = styled.div``;

const Color = styled.span<StyledProps>`
	color: ${(props) => props.color};
`;

export default GetChar;
