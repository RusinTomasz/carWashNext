import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints, maxWidth } from "../../styles/breakpoints";
import { colors } from "../../styles/variables";

const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 37px;
  height: 37px;
  margin-left: 2rem;
  ${maxWidth(breakpoints.lg)} {
    width: 37px;
    height: 37px;
  }
`;

const RingElement = styled.div`
  display: block;
  position: absolute;
  width: 37px;
  height: 37px;
  border: 4px solid ${colors.blue};
  border-radius: 50%;
  animation: ${animate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.blue} transparent transparent transparent;
`;

const RingElementSecond = styled(RingElement)`
  animation-delay: -0.45s;
`;
const RingElementThird = styled(RingElement)`
  animation-delay: -0.3s;
`;

const RingElementFourth = styled(RingElement)`
  animation-delay: -0.15s;
`;

const LoadingSpinner = () => {
  return (
    <Ring>
      <RingElement />
      <RingElementSecond />
      <RingElementThird />
      <RingElementFourth />
    </Ring>
  );
};

export default LoadingSpinner;
