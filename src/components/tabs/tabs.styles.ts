import styled from 'styled-components';

export type TabsStylesType = {
  active?: boolean;
};

export const StyledTabs = styled.div<TabsStylesType>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 20px;
`;
