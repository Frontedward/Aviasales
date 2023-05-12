import styled from 'styled-components';

export type SidebarStyles = {
  active?: boolean;
};

export const StyledSidebar = styled.aside<SidebarStyles>`
  background: ${({ theme }) => theme.mainLight};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 8px 0;
  min-width: 232px;

  .filters-title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;

    letter-spacing: 0.5px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.textColor};

    margin: 10px 0;
    padding: 0 20px;
  }
`;
