import React from 'react';
import styled from 'styled-components';

interface FuncProps {
	color: string;
	number: string;
	percentage: string;
	text: string;
}

const Card: React.FC<FuncProps> = ({ color, number, percentage, text }) => {
	return (
		<CardWrapper>
			<PictureWrapper>
				<Logo color={color} />
				<Dots>...</Dots>
			</PictureWrapper>
			<div>
				<Number color={color}>{number}</Number>
				<InfoWrapper>
					<Text>{text}</Text>
					<Percentage color={color}>{percentage}</Percentage>
				</InfoWrapper>
			</div>
		</CardWrapper>
	);
};

interface StyledProps {
	color: string;
}

const CardWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 1rem;
	padding: 1.5rem;
	margin-bottom: 1rem;
	box-shadow: ${(props) =>
		`0 0 1rem 0.001rem ${props.theme.colors.greyFont}`};
	@media (min-width: 1484px) {
		margin-bottom: 0;
		margin: 0 1rem;
		min-width: 11rem;
		padding: 1rem;
	}
`;

const PictureWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
`;

const Logo = styled.div<StyledProps>`
	height: 3rem;
	width: 3rem;
	background-color: ${({ color }) => color};
	border-radius: 0.7rem;
	box-shadow: ${({ color }) => `0 1rem 1rem -0.7rem ${color}`};
`;

const Dots = styled.div`
	display: flex;
	transform: rotate(90deg);
	font-size: 2rem;
	font-weight: bold;
	@media (min-width: 1484px) {
		font-size: 1.5rem;
	}
`;

const Number = styled.div<StyledProps>`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ color }) => color};
	margin-bottom: 1rem;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.div`
	font-size: 1.3rem;
	color: ${(props) => props.theme.colors.greyFont};
	font-weight: 500;
	@media (min-width: 1484px) {
		font-size: 1rem;
	}
`;

const Percentage = styled.div<StyledProps>`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ color }) => color};
	@media (min-width: 1484px) {
		font-size: 1rem;
	}
`;

export default Card;
