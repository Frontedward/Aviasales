import styled, { keyframes } from 'styled-components';

export type LoaderStyles = {
  size?: number;
  fullpage?: boolean;
  stroke?: number;
  tooltip?: string;
};

const loaderKeyframe = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

export const StyledLoader = styled.div<LoaderStyles>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainLight};

  &:after {
    content: '${({ tooltip }) => tooltip}';
    transform: translateY(-50px);
    color: ${({ theme }) => theme.mainAccent};
  }

  ${({ fullpage }) =>
    fullpage &&
    `
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 3;
  `}

  .ldio-fw2qsoez81 div {
    position: absolute;
    width: ${({ size }) => size && `${size / 4}px`};
    height: ${({ size }) => size && `${size / 4}px`};
    border: ${({ stroke }) => `${stroke}px`} solid
      ${({ theme }) => theme.mainAccent};
    border-top-color: transparent;
    border-radius: 50%;
  }
  .ldio-fw2qsoez81 div {
    animation: ${loaderKeyframe} 1s linear infinite;
    top: ${({ size }) => size && `${size / 2}px`};
    left: ${({ size }) => size && `${size / 2}px`};
  }
  .loadingio-spinner-rolling-qnd2539qjyi {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-fw2qsoez81 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-fw2qsoez81 div {
    box-sizing: content-box;
  }
`;

StyledLoader.defaultProps = {
  tooltip: '',
  size: 200,
  stroke: 3,
};
