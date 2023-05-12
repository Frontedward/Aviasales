import React, { useMemo } from 'react';
import { StyledTicketHeader, StyledTicketHeaderPrice, TicketHeaderStyles } from './ticket-header.styles';

type Props = TicketHeaderStyles & {
  price: number;
  carrier: string;
};

const transformPrice = (price: number) => {
  return String(price)
    .split('')
    .reverse()
    .map((s, i) => (!((i + 1) % 3) ? ` ${s}` : s))
    .reverse()
    .join('');
};

export const TicketHeader = (props: Props) => {
  const { price, carrier, ...otherProps } = props;
  const priceStr = useMemo<string>(() => transformPrice(price), [price]);

  const imgSrc = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <StyledTicketHeader {...otherProps}>
      <StyledTicketHeaderPrice>{priceStr} Р</StyledTicketHeaderPrice>
      <img src={imgSrc} alt="" />
    </StyledTicketHeader>
  );
};
