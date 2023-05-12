import styled from 'styled-components';

export type TicketSegmentStyles = {
  active?: boolean;
};

export const StyledTicketSegment = styled.div<TicketSegmentStyles>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledTickedSegmentCol = styled.div<TicketSegmentStyles>`
  font-style: normal;
  font-weight: 600;

  .head {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #a0b0b9;
  }

  .content {
    font-size: 14px;
    line-height: 21px;
    color: #4a4a4a;
  }
`;
