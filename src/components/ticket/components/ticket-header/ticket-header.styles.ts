import styled from 'styled-components';

export type TicketHeaderStyles = {
  margin?: string;
};

export const StyledTicketHeader = styled.div<TicketHeaderStyles>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ margin }) => margin || '0'};
`;

export const StyledTicketHeaderPrice = styled.span<TicketHeaderStyles>`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #2196f3;
`;
