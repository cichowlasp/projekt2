import React from 'react';
import styled from 'styled-components';

interface FuncProps {
	fullName: string;
	type: string;
	email: string;
	color: string;
}

const User: React.FC<FuncProps> = ({ fullName, type, email, color }) => {
	return (
		<Wrapper>
			<Info>
				<Logo color={color} />
				<Container>
					<Desktop>
						<Name>{fullName}</Name>
						<Type type={type}>{type}</Type>
					</Desktop>

					<Email>{email}</Email>
				</Container>
			</Info>
			<Link>View Profile</Link>
		</Wrapper>
	);
};

interface StyledProps {
	color: string;
}

interface TypeProps {
	type: string;
}

const Logo = styled.div<StyledProps>`
	height: 3.5rem;
	min-width: 3.5rem;
	background-color: ${({ color }) => color};
	border-radius: 0.7rem;
	margin-right: 1rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;

const Name = styled.span`
	font-weight: 600;
`;

const Type = styled.div<TypeProps>`
	background-color: ${(props) => props.theme.colors.white};
	border: ${({ theme, type }) =>
		`1.5px solid ${
			type.toLowerCase() === 'designer'
				? theme.colors.blue
				: theme.colors.orange
		};}`};
	font-weight: 400;
	color: ${({ type, theme }) =>
		type.toLowerCase() === 'designer'
			? theme.colors.blue
			: theme.colors.orange};
	padding: 0.2rem 0.8rem;
	border-radius: 1rem;
	font-size: 0.8rem;
	width: 3.5rem;
	text-align: center;
	margin-top: 0.5rem;
	@media (min-width: 900px) {
		margin-top: 0.5rem;
	}
	@media (min-width: 1500px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-left: 1rem;
	}
`;

const Link = styled.div`
	text-decoration: underline;
	font-size: 0.8rem;
	font-stretch: ultra-condensed;
	font-weight: 600;
	color: ${(props) => props.theme.colors.blue};
	&:hover {
		cursor: pointer;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Email = styled.div`
	margin-top: 0.7rem;
	font-size: 0.8rem;
	color: ${(props) => props.theme.colors.greyFont};
`;

const Container = styled.div`
	margin-top: 0.3rem;
`;
const Desktop = styled.div`
	@media (min-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 1500px) {
		display: flex;
		flex-direction: row;
	}
`;

export default User;
