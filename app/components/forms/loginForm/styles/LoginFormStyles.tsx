import styled, {css} from "styled-components";
import {colors, fontFamilies} from "../../../../styles/variables";


const inputsCss = css`
  font-family: ${fontFamilies.exo};
  font-size: 14px;
  line-height: 24px;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  border: 1px solid ${colors.grayText};
  box-shadow: none;
  outline: none;
  width: 100%;
`;

const Input = styled.input`
  ${inputsCss}
`;

export {Input};