import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Components/Router/Router';
import { lightPallete, darkPallete } from './utils/colors';
import { ThemeContext } from './Components/Context/DarkModeProvider';
const App = () => {
	const { darkMode } = useContext(ThemeContext);
	const defaultFontSize = 16;
	const theme = {
		colors: darkMode ? darkPallete : lightPallete,
	};

	const GlobalStyle = createGlobalStyle<{ bgColor: string }>`
  html {
    font-size: ${defaultFontSize}px;
    background-color: ${(props) => props.bgColor};
	@media (min-width: 2000px) {
		font-size: ${defaultFontSize * 2}px;
		}
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle bgColor={theme.colors.white} />
			<Router />
		</ThemeProvider>
	);
};

export default App;
