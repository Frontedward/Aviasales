import styled from 'styled-components';

export type Styles = {
  color?: string;
};

export const StyledLogo = styled.span<Styles>`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
