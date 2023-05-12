import * as React from 'react';

import logoImg from './logo.svg';
import { StyledLogo, Styles } from './logo.styles';

type Props = Styles;

export const Logo = (props: Props) => {
  return (
    <StyledLogo {...props}>
      <img src={logoImg} alt='' />
    </StyledLogo>
  );
};
