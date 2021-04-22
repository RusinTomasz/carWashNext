import styled, { css } from "styled-components";
import SubmitInput from "../../../../styles/shared/inputs/SubmitInput";
import { colors, fontFamilies } from "../../../../styles/variables";

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

const SubmitButton = styled(SubmitInput)`
  display: block;
  margin: 1rem 0 0 auto;
  padding: 0.5rem 3rem;
`;

const InputLabelParagraph = styled.p`
  margin: 0.5rem 0;
  color: white;
`;

const Input = styled.input`
  ${inputsCss}
`;

const TextArea = styled.textarea`
  ${inputsCss}
`;

export { SubmitButton, InputLabelParagraph, Input, TextArea };
