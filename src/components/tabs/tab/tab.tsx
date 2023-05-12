import React from 'react';
import { StyledTab, TabStyles } from './tab.styles';
import { SortTypes } from '../../../lib/sort-callbacks';

type Props = TabStyles & {
  label: string;
  name: SortTypes;
  onSortChange: (sortType: SortTypes) => void;
};

export const Tab = (props: Props) => {
  const { label, onSortChange, name, ...styledProps } = props;

  return (
    <StyledTab {...styledProps} onClick={() => onSortChange(name)}>
      {label}
    </StyledTab>
  );
};
