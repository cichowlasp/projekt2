import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import styled from 'styled-components';
import image from './star.svg';

const Dashboard = (props: any) => {
	return (
		<Container>
			<Show>
				<TopBar>
					<DesktopLogo>
						<Image src={image} alt='' />
						<TitleDesktop>{props.title}</TitleDesktop>
					</DesktopLogo>
					<div className='mobile'>
						<MenuIcon fontSize={'inherit'} />
					</div>
					<Wrapper>
						<SearchIcon fontSize={'inherit'} />
						<NotificationsNoneOutlinedIcon fontSize={'inherit'} />
						<UserIcon></UserIcon>
					</Wrapper>
				</TopBar>
				<Title>{props.title}</Title>
			</Show>
			<Padding>{props.children}</Padding>
		</Container>
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
	@media (min-width: 900px) {
		border-bottom: none;
		padding-top: 2rem;
		.mobile {
			display: none;
		}
	}
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
	@media (min-width: 900px) {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 0.8rem;
	}
`;

const Title = styled.div`
	font-size: 2.7rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.black};
	padding: 2rem 2rem;
	background-color: ${(props) => props.theme.colors.white};
	@media (min-width: 900px) {
		display: none;
	}
`;

const TitleDesktop = styled.div`
	display: none;
	@media (min-width: 900px) {
		display: flex;
		font-size: 2.7rem;
		font-weight: 600;
		color: ${(props) => props.theme.colors.black};
		padding: 0rem 2rem;
		background-color: ${(props) => props.theme.colors.white};
	}
`;

const DesktopLogo = styled.div`
	display: none;
	@media (min-width: 900px) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

const Show = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;
	display: flex;
	flex-direction: column;
`;

const Padding = styled.div`
	width: 100vw;
	height: 100vh;
`;

const Image = styled.img`
	height: 3rem;
	width: 3rem;
`;

const Container = styled.div`
	height: 100%;
`;

export default Dashboard;
