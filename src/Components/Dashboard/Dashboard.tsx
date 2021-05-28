import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import styled from 'styled-components';

const Dashboard = (props: any) => {
	return (
		<>
			<Show>
				<TopBar>
					<MenuIcon fontSize={'inherit'} />
					<Wrapper>
						<SearchIcon fontSize={'inherit'} />
						<NotificationsNoneOutlinedIcon fontSize={'inherit'} />
						<UserIcon></UserIcon>
					</Wrapper>
				</TopBar>
				<Title>{props.title}</Title>
			</Show>
			<Padding>{props.children}</Padding>
		</>
	);
};

const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	padding: 0 2rem;
	font-size: 2rem;
	border-bottom: 0.2rem solid ${(props) => props.theme.colors.grey};
	background-color: ${(props) => props.theme.colors.white};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 8rem;
	justify-content: space-between;
`;

const UserIcon = styled.div`
	height: 2rem;
	width: 2rem;
	background-color: ${(props) => props.theme.colors.red};
	border-radius: 0.65rem;
`;

const Title = styled.div`
	font-size: 2.7rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.black};
	padding: 2rem 2rem;
	background-color: ${(props) => props.theme.colors.white};
`;

const Show = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;
`;

const Padding = styled.div`
	margin-top: 12rem;
`;
export default Dashboard;
