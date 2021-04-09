import React from "react";
import styled, { css } from "styled-components";
import { starsRaterColors } from "../../../styles/variables";

interface StarProps {
  isActive?: boolean;
  isActiveHalf?: boolean;
  willBeActive?: boolean;
  isDisabled?: boolean;
  starsLinkColor?: string;
}

const starsRaterBeforeStyles = css`
  &:before {
    content: "\\2605";
    color: ${starsRaterColors.starsRaterActive};
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
  }
`;

const StarsRaterStar = styled.div<StarProps>`
  position: relative;
  margin: 0 0.2rem;
  font-size: 24px;

  color: ${(props) =>
    props.starsLinkColor
      ? props.starsLinkColor
      : starsRaterColors.starsRaterLink};
  cursor: pointer;

  ${(props) =>
    props.willBeActive && `color: ${starsRaterColors.starsRaterHover}`};
  ${(props) => props.isActive && `color: ${starsRaterColors.starsRaterActive}`};
  ${(props) => props.isActiveHalf && starsRaterBeforeStyles};
  ${(props) => props.isDisabled && `cursor: default`};
`;

const Star = (props: StarProps) => {
  return <StarsRaterStar {...props}>★</StarsRaterStar>;
};

export default Star;
