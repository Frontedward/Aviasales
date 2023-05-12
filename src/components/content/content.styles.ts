import styled from 'styled-components';

export type Styles = {
  active?: boolean;
};

export const StyledContent = styled.div<Styles>`
  display: grid;
  grid-template-columns: 232px 1fr;
  align-items: start;
  gap: 20px;
`;
