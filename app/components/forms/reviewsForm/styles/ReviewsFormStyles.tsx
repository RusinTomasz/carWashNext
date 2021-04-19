import styled, { css } from "styled-components";
import SubmitInput from "../../../../styles/shared/inputs/SubmitInput";
import { colors, fontFamilies } from "../../../../styles/variables";
import StarsRater from "../../../starsRater/StarsRater";

const inputCss = css`
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

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
`;

const Input = styled.input`
  ${inputCss}
  margin-bottom: 1.5rem
`;

const TextArea = styled.textarea`
  ${inputCss}
`;

const SubmitButton = styled(SubmitInput)`
  margin-top: 3rem;
  outline: none;
`;

const StarsRaterReview = styled(StarsRater)`
  margin-left: 1rem;
`;

const StyledReviewsForm = styled.form`
  margin-top: 3rem;
`;

export {
  Label,
  TextArea,
  Input,
  SubmitButton,
  StarsRaterReview,
  StyledReviewsForm,
};
