import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Components/Router/Router';
import { lightPallete, darkPallete } from './utils/colors';
import { ThemeContext } from './Components/Context/DarkModeProvider';
const App = () => {
	const { darkMode } = useContext(ThemeContext);
	const theme = {
		colors: darkMode ? darkPallete : lightPallete,
	};

	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};

export default App;
