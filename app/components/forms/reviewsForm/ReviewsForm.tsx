import React, { SyntheticEvent } from "react";
import InputEvent from "../../../types/InputEvent";
import LoadingSpinner from "../../loaders/LoadingSpinner";
import CaptchaProps from "../../../types/Captcha";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Label,
  TextArea,
  SubmitButton,
  StarsRaterReview,
  Input,
  StyledReviewsForm,
  ActionsWrap,
  CaptchaWrap,
} from "./styles/ReviewsFormStyles";

interface ReviewsFormProps {
  starsValue: number;
  authorName: string;
  reviewMessage: string;
  isLoading: boolean;
  onRate: ({ rating }: { rating: number }) => void;
  onConfirm: (evt: SyntheticEvent) => Promise<void>;
  handleInputChange: (evt: InputEvent) => void;
  handleMessageChange: (evt: InputEvent) => void;
}

const ReviewsForm = (props: ReviewsFormProps & CaptchaProps) => {
  const {
    starsValue,
    authorName,
    reviewMessage,
    isLoading,
    recaptchaRef,
    isCaptchaVerified,
    onCaptchaChange,
    onRate,
    onConfirm,
    handleInputChange,
    handleMessageChange,
  } = props;

  return (
    <StyledReviewsForm onSubmit={onConfirm}>
      <h3>Wyraź swoją opinię</h3>
      <Label>
        Twoja ocena:
        <StarsRaterReview
          total={5}
          rating={starsValue}
          onRate={onRate}
          starsLinkColor={"#e5e5e5"}
          size={32}
        />
      </Label>
      <Input
        type="text"
        placeholder="Imię / Nazwisko / Pseudonim"
        value={authorName}
        onChange={handleInputChange}
        required
      />
      <TextArea
        rows={4}
        cols={50}
        value={reviewMessage}
        placeholder="Wpisz treść opinii"
        onChange={handleMessageChange}
        required
      />
      <FlexWrapper justifyContent="flex-end">
        <CaptchaWrap>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            onChange={onCaptchaChange}
          />
        </CaptchaWrap>
      </FlexWrapper>
      <ActionsWrap alignItems="center">
        <SubmitButton
          backgroundColor="blue"
          color="white"
          font="teko"
          type="submit"
          value="Wyślij recenzje"
          disabled={isLoading || !isCaptchaVerified}
        />
        {isLoading && <LoadingSpinner size={37} borderSize={4} />}
      </ActionsWrap>
    </StyledReviewsForm>
  );
};

export default ReviewsForm;
