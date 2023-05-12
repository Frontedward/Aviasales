import styled from 'styled-components';

export type TicketStyles = {
  active?: boolean;
};

export const StyledTicked = styled.div<TicketStyles>`
  margin: 10px 0;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;
