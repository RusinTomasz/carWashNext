import styled from "styled-components";
import { colors } from "../../variables";
import Fonts from "../fonts";

interface ActionLinkProps {
  backgroundColor?: "blue" | "red" | "default";
  font?: "teko" | "exo";
}

const ActionLink = styled.a<ActionLinkProps>`
  display: inline-block;
  padding: 0.5rem 1.5rem 0.2rem;
  font-size: 21px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${colors.white};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    `${colors[props.backgroundColor]}` || `${colors.default}`};
  font-family: ${(props) => Fonts[props.font] || '"Exo", sans-serif'};
`;

export default ActionLink;
