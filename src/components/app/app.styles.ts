import styled from 'styled-components';

export type Styles = {
  background?: string;
};

export const StyledApp = styled.div<Styles>`
  width: 754px;
  margin: 0 auto;
`;
