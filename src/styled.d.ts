import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme {
    interactive: string;
    mainAccent: string;
    borderColor: string;
    mainLight: string;
    secondLight: string;
    textColor: string;
    thirdLight: string;
    outline: string;
  }
}
