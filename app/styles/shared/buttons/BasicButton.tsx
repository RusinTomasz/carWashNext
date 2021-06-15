import styled from "styled-components";
import { colors } from "../../variables";
import Fonts from "../fonts";

interface BasicButtonProps {
  backgroundColor?: "blue" | "red" | "grayButton";
  color?: "white" | "default";
  zIndex?: number;
}

const BasicButton = styled.button<BasicButtonProps>`
  display: inline-block;
  padding: 0.5rem 1.5rem 0.2rem;
  font-size: 21px;
  line-height: 30px;
  font-family: ${Fonts.teko};
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-out;
  background-color: ${(props) =>
    props.backgroundColor ? colors[props.backgroundColor] : colors.grayButton};
  color: ${(props) => (props.color ? colors[props.color] : colors.default)};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
`;

export default BasicButton;
