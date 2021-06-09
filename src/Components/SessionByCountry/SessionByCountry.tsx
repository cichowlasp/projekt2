import React, { useContext } from 'react';
import { WorldMap } from 'react-svg-worldmap';
import styled, { ThemeContext } from 'styled-components';
import GetChar from '../../utils/GetChar';

const SessionByCountry: React.FC<{
	data: { country: string; value: number }[];
}> = ({ data }) => {
	const theme = useContext(ThemeContext);

	const stylingFunction = (context: any) => {
		return {
			fill: context.countryValue,
			stroke: context.countryValue,
			strokeWidth: 1,
			cursor: 'pointer',
		};
	};

	return (
		<div>
			<Wrapper>
				<WorldMap
					size='md'
					backgroundColor={theme.colors.grey}
					data={data}
					styleFunction={stylingFunction}
					borderColor={theme.colors.greyDark}
					color={theme.colors.greyDark}
				/>
			</Wrapper>

			<div>
				<Title>
					<div>Session by Device</div>
				</Title>

				{GetChar(
					[{ name: 'USA', percents: 60 }],
					theme.colors.green,
					theme.colors.greyFont,
					'USA'
				)}
				<Margin>
					{GetChar(
						[{ name: 'UK', percents: 40 }],
						theme.colors.yellow,
						theme.colors.greyFont,
						'UK'
					)}
				</Margin>

				{GetChar(
					[{ name: 'UAE', percents: 20 }],
					theme.colors.orange,
					theme.colors.greyFont,
					'UAE'
				)}
			</div>
		</div>
	);
};

const Title = styled.div`
	font-weight: 600;
	font-size: 1.5rem;
	margin: 1rem 0 2rem 0;
`;

const Margin = styled.div`
	margin: 1rem 0;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
`;

export default SessionByCountry;
