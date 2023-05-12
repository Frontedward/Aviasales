import styled from 'styled-components';

export type MainStylesType = {
  active?: boolean;
};

export const StyledMain = styled.main<MainStylesType>``;

export const StyledShowMoreButton = styled.button<MainStylesType>`
  background: ${({ theme }) => theme.mainAccent};
  border-radius: 5px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.mainLight};

  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  border: none;

  margin-top: 20px;

  flex-grow: 1;

  cursor: pointer;
`;

export const StyledMainTitle = styled.h2<MainStylesType>`
  text-align: center;
`;
