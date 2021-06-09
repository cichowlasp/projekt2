import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';

interface FuncProps {
	stars: number;
	name1: string;
	name2: string;
	text: string;
	reverse: boolean;
	color: string;
}

const Comment: React.FC<FuncProps> = ({
	stars,
	name1,
	name2,
	text,
	reverse,
	color,
}) => {
	return (
		<Wrapper reverse={reverse}>
			<CommentInfo>
				<LogoContainer>
					<Logo color={color} />
					<div>
						<div>
							<StarIcon
								fontSize='small'
								htmlColor={0 < stars ? '#FBC04F' : '#9B9A9F'}
							/>
							<StarIcon
								fontSize='small'
								htmlColor={1 < stars ? '#FBC04F' : '#9B9A9F'}
							/>
							<StarIcon
								fontSize='small'
								htmlColor={2 < stars ? '#FBC04F' : '#9B9A9F'}
							/>
							<StarIcon
								fontSize='small'
								htmlColor={3 < stars ? '#FBC04F' : '#9B9A9F'}
							/>
							<StarIcon
								fontSize='small'
								htmlColor={4 < stars ? '#FBC04F' : '#9B9A9F'}
							/>
						</div>
						<Text>
							<Bold>{name1}</Bold>
							<GreyText>
								{'   '}
								get review from{'   '}
								<GreyBoldText>{name2}</GreyBoldText>
							</GreyText>
						</Text>
					</div>
				</LogoContainer>
				<Designer reverse={reverse}>Designer</Designer>
				<Date>17 March 2021</Date>
				<ButtonContainer>
					<Square>
						<CheckIcon fontSize='small' htmlColor='#315AFE' />
					</Square>
					<Square>
						<DeleteOutlineIcon fontSize='small' />
					</Square>
				</ButtonContainer>
			</CommentInfo>
			<Content>{text}</Content>
		</Wrapper>
	);
};

export default Comment;

interface StyledProps {
	color: string;
}

const Logo = styled.div<StyledProps>`
	height: 2.5rem;
	min-width: 2.5rem;
	background-color: ${({ color }) => color};
	border-radius: 0.7rem;
	box-shadow: ${({ color }) => `0 1rem 1rem -0.7rem ${color}`};
	margin-right: 1rem;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Text = styled.div`
	font-size: 0.8rem;
`;
const Bold = styled.span`
	font-weight: bold;
`;

const CommentInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const GreyText = styled.span`
	color: ${(props) => props.theme.colors.greyDark};
`;

const GreyBoldText = styled.span`
	font-weight: 700;
`;

const Designer = styled.div<WrapperProps>`
	margin: auto 0;
	padding: 1rem;
	background-color: ${(props) =>
		props.reverse ? props.theme.colors.grey : props.theme.colors.white};
	color: ${(props) => props.theme.colors.greyDark};
	border-radius: 1rem;
	border: 1px solid ${(props) => props.theme.colors.grey};
	display: none;
	@media (min-width: 1000px) {
		display: block;
	}
`;

const Date = styled.div`
	margin: auto 0;
	color: ${(props) => props.theme.colors.greyDark};
	font-weight: 700;
	display: none;
	@media (min-width: 1000px) {
		display: block;
	}
`;

const Square = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.white};
	height: 2.5rem;
	width: 2.5rem;
	justify-content: center;
	align-items: center;
	margin-left: 1rem;
	border: ${(props) => `0.5px solid ${props.theme.colors.grey}`};
	border-radius: 0.7rem;
	&:hover {
		cursor: pointer;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Content = styled.div`
	margin-top: 1rem;
`;

interface WrapperProps {
	reverse?: Boolean | undefined;
}

const Wrapper = styled.div<WrapperProps>`
	background-color: ${({ reverse, theme }) =>
		reverse ? theme.colors.white : theme.colors.grey};
	border-radius: 1rem;
	padding: 1.5rem;
	box-shadow: ${(props) =>
		props.reverse
			? `0 0 1rem 0.001rem ${props.theme.colors.greyFont}`
			: ''};
	margin-top: 1rem;
`;
