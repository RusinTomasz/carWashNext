import React from "react";
import styled, {keyframes} from "styled-components";
import {colors} from "../../styles/variables";

interface RingProps {
    size: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}

interface RingElementProps {
    size: number;
    borderSize: number;
    borderColor?: string;
}

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div<RingProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  margin-left: ${(props) => props.marginLeft ? `${props.marginLeft}px` : "0"};
  margin-right: ${(props) => props.marginRight ? `${props.marginRight}px` : "0"};
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : "0"};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : "0"};
`;

const RingElement = styled.div<RingElementProps>`
  display: block;
  position: absolute;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  border: ${(props) =>
          props.borderColor
                  ? `${props.borderSize}px solid ${props.borderColor}`
                  : `${props.borderSize}px solid ${colors.blue}`};
  border-radius: 50%;
  animation: ${animate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props) =>
          props.borderColor
                  ? `${props.borderColor} transparent transparent transparent;`
                  : `${colors.blue} transparent transparent transparent`};
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

interface LoadingSpinnerProps {
    size: number;
    borderSize: number;
    borderColor?: string;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
    const {size, borderSize, borderColor, marginLeft, marginRight, marginTop, marginBottom} = props;

    return (
        <Ring size={size} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop}
              marginBottom={marginBottom}>
            <RingElement
                size={size}
                borderSize={borderSize}
                borderColor={borderColor}
            />
            <RingElementSecond
                size={size}
                borderSize={borderSize}
                borderColor={borderColor}
            />
            <RingElementThird
                size={size}
                borderSize={borderSize}
                borderColor={borderColor}
            />
            <RingElementFourth
                size={size}
                borderSize={borderSize}
                borderColor={borderColor}
            />
        </Ring>
    );
};

export default LoadingSpinner;
