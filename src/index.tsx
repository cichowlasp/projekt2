import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const defaultFontSize = 8;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${defaultFontSize};
    background-color: #FFFFFF;

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

const theme = {
	colors: {
		white: '#FFFFFF',
		grey: '#FAFAFC',
		blue: '#315AFE',
		red: '#DA5853',
		black: '#23212C',
		green: '#01BE83',
		orange: '#FF7833',
		greyFont: '#C6CDD6',
		greyDark: '#9E9EA2',
		greyLight: '#F2F3FB',
	},
	calculatePxToRem: (size: number) => `${size / defaultFontSize}rem`,
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
