import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';

const Comment = () => {
	const length = 3;
	return (
		<div>
			<div>
				<LogoContainer>
					<Logo color='green'></Logo>
					<div>
						<div>
							<StarIcon htmlColor={0 < length ? 'yellow' : ''} />
							<StarIcon htmlColor={1 < length ? 'yellow' : ''} />
							<StarIcon htmlColor={2 < length ? 'yellow' : ''} />
							<StarIcon htmlColor={3 < length ? 'yellow' : ''} />
							<StarIcon htmlColor={4 < length ? 'yellow' : ''} />
						</div>
						<div>text</div>
					</div>
				</LogoContainer>
				<div>designer</div>
				<div>date</div>
				<div>
					<div>check</div>
					<div>trash</div>
				</div>
			</div>
			tstssts
		</div>
	);
};

export default Comment;

interface StyledProps {
	color: string;
}

const Logo = styled.div<StyledProps>`
	height: 3rem;
	width: 3rem;
	background-color: ${({ color }) => color};
	border-radius: 0.7rem;
	box-shadow: ${({ color }) => `0 1rem 1rem -0.7rem ${color}`};
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
