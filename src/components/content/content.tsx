import * as React from 'react';
import { StyledContent } from './content.styles';
import { Sidebar } from '../sidebar/sidebar';
import { Main } from '../main/main';

export const Content = () => {
  return (
    <StyledContent>
      <Sidebar />
      <Main />
    </StyledContent>
  );
};
