import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  interactive: '#f1fcff',
  mainAccent: '#2196f3',
  borderColor: '#9abbce',
  mainLight: '#ffffff',
  secondLight: '#f1fcff',
  thirdLight: '#F3F7FA',
  textColor: '#4a4a4a',
  outline: '#DFE5EC',
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    font-family: 'Open Sans';
    padding: 0 0 50px;
    margin: 0;
    background: ${({ theme }) => theme.thirdLight};
  }
`;
