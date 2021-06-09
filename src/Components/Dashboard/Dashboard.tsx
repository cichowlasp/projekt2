import React, { useState, useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import styled, { ThemeContext } from 'styled-components';
import PieChartIcon from '@material-ui/icons/PieChart';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import { ThemeContext as DarkModeContext } from '../Context/DarkModeProvider';
import { ReactComponent as Logo } from './star.svg';
import search from './search.png';

interface FuncProps {
	title?: string;
	children?: React.ReactNode;
}

const Dashboard = (props: FuncProps) => {
	const { colors } = useContext(ThemeContext);
	const { toggleDarkMode } = useContext(DarkModeContext);
	const [sideBar, setSideBar] = useState<boolean>(false);
	const handleSideBar = () => {
		setSideBar((preValue) => !preValue);
	};

	return (
		<Container>
			<Show>
				<TopBar>
					<DesktopLogo>
						<Logo fill={colors.black} />
						<TitleDesktop>{props.title}</TitleDesktop>
					</DesktopLogo>
					<Option onClick={handleSideBar} className='mobile'>
						<MenuIcon fontSize={'inherit'} />
					</Option>
					<Wrapper>
						<SearchIcon
							htmlColor={colors.black}
							fontSize={'inherit'}
							className='mobile'
						/>
						<Input placeholder='Search' type='text' />
						<NotificationsNoneOutlinedIcon
							htmlColor={colors.black}
							fontSize={'inherit'}
						/>
						<UserIcon></UserIcon>
						<LoggedUser>
							Piotr Cichowlas <KeyboardArrowDownIcon />
						</LoggedUser>
					</Wrapper>
				</TopBar>
				<Title>{props.title}</Title>
			</Show>
			<SideBar showMobile={sideBar}>
				<OptionContainer>
					<Option className='close' onClick={handleSideBar}>
						<HighlightOffOutlinedIcon fontSize='large' />
					</Option>
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
					<Option onClick={toggleDarkMode}>
						<Brightness4OutlinedIcon fontSize='large' />
					</Option>
					<Option>
						<SettingsOutlinedIcon fontSize='large' />
					</Option>
					<Option className='exit'>
						<ExitToAppIcon fontSize='large' />
					</Option>
				</OptionContainer>
			</SideBar>
			<Padding>{props.children}</Padding>
		</Container>
	);
};

const Input = styled.input`
	display: none;
	@media (min-width: 1000px) {
		display: block;
		height: 1rem;
		padding: 1rem 0 1rem 3rem;
		width: 15vw;
		background-color: ${(props) => props.theme.colors.grey};
		box-shadow: none;
		border: none;
		font-size: 1.1rem;
		border-radius: 0.8rem;
		background-image: url(${search});
		background-position: 1rem center;
		background-repeat: no-repeat;
		background-size: 1.5rem 1.5rem;
		margin-right: 8rem;
		&:focus {
			outline: none;
			border: none;
		}

		&::placeholder {
			color: ${(props) => props.theme.colors.greyDark};
		}
	}
`;

const OptionContainer = styled.div`
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	.exit {
		position: fixed;
		bottom: 0;
		margin-bottom: 1rem;
	}
	.close {
		position: fixed;
		top: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media (min-width: 1000px) {
		margin-top: 8rem;
		height: 30vw;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		.exit {
			position: fixed;
			bottom: 0;
			margin-bottom: 1rem;
		}
		.close {
			display: none;
		}
	}
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
	padding: 0 2rem 2rem 2rem;
	font-size: 2rem;
	border-bottom: 0.2rem solid ${(props) => props.theme.colors.grey};
	background-color: ${(props) => props.theme.colors.white};
	@media (min-width: 1000px) {
		border-bottom: none;
		padding-top: 2rem;
		.mobile {
			display: none;
		}
	}
`;

const SideBar = styled.div<{ showMobile?: boolean }>`
	position: fixed;
	bottom: 0;
	background-color: ${(props) => props.theme.colors.white};
	height: 100%;
	width: 8rem;
	z-index: 3;
	display: ${({ showMobile }) => (showMobile ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	justify-content: center;

	transition: opacity 1s;
	@media (min-width: 1000px) {
		position: fixed;
		top: 0;
		background-color: ${(props) => props.theme.colors.white};
		height: 100%;
		width: 6vw;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 8rem;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 1000px) {
		width: 45rem;
	}
`;

const UserIcon = styled.div`
	height: 2rem;
	width: 2rem;
	background-color: ${(props) => props.theme.colors.red};
	border-radius: 0.65rem;
	@media (min-width: 1000px) {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 0.8rem;
	}
`;

const Title = styled.div`
	font-size: 2.7rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.black};
	padding: 1rem 2rem;
	background-color: ${(props) => props.theme.colors.white};
	@media (min-width: 1000px) {
		display: none;
	}
`;

const TitleDesktop = styled.div`
	display: none;
	@media (min-width: 1000px) {
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
	@media (min-width: 1000px) {
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

	@media (min-width: 1000px) {
		margin-left: 5vw;
		width: 95vw;
	}
`;

const Container = styled.div`
	height: 100%;
`;

const LoggedUser = styled.div`
	display: none;
	@media (min-width: 1000px) {
		color: ${(props) => props.theme.colors.black};
		font-size: 1.1rem;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default Dashboard;
