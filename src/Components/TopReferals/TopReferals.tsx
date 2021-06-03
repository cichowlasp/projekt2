import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import GetChar from '../../utils/GetChar';

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
					{GetChar(
						data1,
						colors.green,
						colors.greyFont,
						'Internal Referals'
					)}
				</div>
			</Container>
			<Container>
				<Logo color={colors.orange} />
				<div>
					{GetChar(
						data2,
						colors.orange,
						colors.greyFont,
						'Direct Traffic'
					)}
				</div>
			</Container>
			<Container>
				<Logo color={colors.yellow} />
				<div>
					{GetChar(
						data3,
						colors.yellow,
						colors.greyFont,
						'Search Engine'
					)}
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

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 10rem;
`;

export default TopReferals;
