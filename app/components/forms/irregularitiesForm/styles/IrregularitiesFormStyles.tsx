import styled, { css } from "styled-components";
import FlexWrapper from "../../../../styles/shared/FlexWrapper";
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
  padding: 0.5rem 3rem;
`;

const InputLabelParagraph = styled.p`
  margin: 0.5rem 0;
  color: white;
`;

const ActionsWrap = styled(FlexWrapper)`
  margin-top: 1rem;
`;

const Input = styled.input`
  ${inputsCss}
`;

const TextArea = styled.textarea`
  ${inputsCss}
`;

const CaptchaWrap = styled.div`
  margin: 2rem 0;
`;

export {
  SubmitButton,
  InputLabelParagraph,
  Input,
  TextArea,
  ActionsWrap,
  CaptchaWrap,
};
