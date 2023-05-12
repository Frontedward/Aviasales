import styled from 'styled-components';

export type Styles = {
  active?: boolean;
};

export const StyledHeader = styled.header<Styles>`
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;
