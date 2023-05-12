import React from 'react';
import { StyledFilter } from './filter.styles';
import { NanoId } from '../../types/core';

type Props = {
  id: NanoId;
  label: string;
  active: boolean;
  onFilterToggle: (value: string) => void;
};

export const Filter = (props: Props) => {
  const { id, label, active, onFilterToggle } = props;

  return (
    <StyledFilter>
      <input
        type='checkbox'
        checked={active}
        onChange={() => onFilterToggle(id)}
      />
      <span>{label}</span>
    </StyledFilter>
  );
};
