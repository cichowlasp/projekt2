import React from 'react';
import styled from 'styled-components';

interface FuncProps {
	title?: string;
	option?: React.ReactNode;
	children?: React.ReactNode;
}

const Section = (props: FuncProps) => {
	return (
		<SectionWrapper>
			<TitleWrapper>
				<div>{props.title}</div>
				{props.option}
			</TitleWrapper>
			{props.children}
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.grey};
	margin: 2rem 1rem;
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
	margin-bottom: 1rem;
`;

export default Section;
