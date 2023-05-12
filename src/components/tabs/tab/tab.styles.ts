import styled from 'styled-components';

export type TabStyles = {
  active: boolean;
};

export const StyledTab = styled.button<TabStyles>`
  padding: 15px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.mainLight};
  border: 1px solid ${({ theme }) => theme.outline};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.textColor};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.secondLight};
  }

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.mainAccent};
    border-color: transparent;
    color: ${theme.mainLight};
    cursor: default;

    &:hover {
      background: ${theme.mainAccent};
      border-color: transparent;
      color: ${theme.mainLight};
    }
  `}

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

StyledTab.defaultProps = {
  active: false,
};
