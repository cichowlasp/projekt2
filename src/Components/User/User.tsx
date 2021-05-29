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
					<Name>{fullName}</Name>
					<Type type={type}>{type}</Type>
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

const Type = styled.span<TypeProps>`
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
	margin-left: 0.5rem;
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
`;

const Email = styled.div`
	margin-top: 0.7rem;
	font-size: 0.8rem;
	color: ${(props) => props.theme.colors.greyFont};
`;

const Container = styled.div`
	margin-top: 0.3rem;
`;

export default User;
