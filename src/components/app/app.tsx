import React, { useEffect } from 'react';
import { Styles, StyledApp } from './app.styles';

import { Header } from '../header/header';
import { Content } from '../content/content';
import { createSearch } from '../../services/aviasales-api/create-search';

type Props = Styles;

const App = (props: Props) => {
  useEffect(() => {
    createSearch();
  }, []);

  return (
    <StyledApp {...props}>
      <Header />
      <Content />
    </StyledApp>
  );
};

export default App;
