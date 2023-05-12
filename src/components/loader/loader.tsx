import React from 'react';
import { LoaderStyles, StyledLoader } from './loader.styles';

type Props = LoaderStyles;

export const Loader = (props: Props) => {
  const { ...otherProps } = props;

  return (
    <StyledLoader {...otherProps}>
      <div className='loadingio-spinner-rolling-qnd2539qjyi'>
        <div className='ldio-fw2qsoez81'>
          <div></div>
        </div>
      </div>
    </StyledLoader>
  );
};
