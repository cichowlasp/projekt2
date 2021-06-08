import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import styled from 'styled-components';
import PieChartIcon from '@material-ui/icons/PieChart';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
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
			<SideBar>
				<OptionContainer>
					<Option>
						<PieChartIcon fontSize='large' />
					</Option>
					<Option>
						<AssessmentOutlinedIcon fontSize='large' />
					</Option>
					<Option>
						<PeopleOutlineIcon fontSize='large' />
					</Option>
					<Option>
						<ConfirmationNumberOutlinedIcon fontSize='large' />
					</Option>
					<Option>
						<SettingsOutlinedIcon fontSize='large' />
					</Option>
				</OptionContainer>
			</SideBar>
			<Padding>{props.children}</Padding>
		</Container>
	);
};

const OptionContainer = styled.div`
	margin-top: 8rem;
	height: 30vw;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Option = styled.div<{ active?: boolean }>`
	background-color: ${(props) =>
		props.active ? props.theme.colors.blue : props.theme.colors.white};
	color: ${(props) =>
		props.active ? props.theme.colors.white : props.theme.colors.black};
	height: 3.5rem;
	width: 3.5rem;
	border-radius: 1.2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: ${(props) => props.theme.colors.blue};
		color: ${(props) => props.theme.colors.white};
		cursor: pointer;
	}
`;

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

const SideBar = styled.div`
	display: none;
	@media (min-width: 900px) {
		position: fixed;
		top: 0;
		background-color: ${(props) => props.theme.colors.white};
		height: 100%;
		width: 6vw;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
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

	@media (min-width: 900px) {
		margin-left: 5vw;
		width: 95vw;
	}
`;

const Image = styled.img`
	height: 3rem;
	width: 3rem;
`;

const Container = styled.div`
	height: 100%;
`;

export default Dashboard;