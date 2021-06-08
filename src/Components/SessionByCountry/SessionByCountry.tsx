import React, { useContext } from 'react';
import { WorldMap } from 'react-svg-worldmap';
import styled, { ThemeContext } from 'styled-components';
import GetChar from '../../utils/GetChar';

const SessionByCountry = () => {
	const theme = useContext(ThemeContext);
	const data = [
		{ country: 'us', value: theme.colors.green },
		{ country: 've', value: theme.colors.green },
		{ country: 'co', value: theme.colors.green },
		{ country: 'mx', value: theme.colors.green },
		{ country: 'pe', value: theme.colors.green },
		{ country: 'bo', value: theme.colors.green },
		{ country: 'in', value: theme.colors.yellow },
		{ country: 'sd', value: theme.colors.yellow },
		{ country: 'au', value: theme.colors.yellow },
		{ country: 'cn', value: theme.colors.yellow },
		{ country: 'ws', value: theme.colors.orange },
		{ country: 'mr', value: theme.colors.orange },
		{ country: 'sn', value: theme.colors.orange },
		{ country: 'ml', value: theme.colors.orange },
		{ country: 'dz', value: theme.colors.orange },
	];

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
			<WorldMap
				size='responsive'
				backgroundColor={theme.colors.grey}
				data={data}
				styleFunction={stylingFunction}
				borderColor={theme.colors.greyDark}
				color={theme.colors.greyDark}
			/>
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

export default SessionByCountry;
