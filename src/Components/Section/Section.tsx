import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';

const Section = (props: any) => {
	return (
		<SectionWrapper>
			<TitleWrapper>
				<div>{props.title}</div>
				<ArrowForwardIcon />
			</TitleWrapper>
			{props.children}
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.grey};
	margin: 1rem;
	padding: 2rem;
	border-radius: 1rem;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	justify-items: center;
	font-weight: 600;
	font-size: 1.5rem;
`;

export default Section;
