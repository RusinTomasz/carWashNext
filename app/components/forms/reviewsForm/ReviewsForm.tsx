import React, { SyntheticEvent } from "react";
import InputEvent from "../../../types/InputEvent";
import {
  Label,
  TextArea,
  SubmitButton,
  StarsRaterReview,
  Input,
  StyledReviewsForm,
} from "./styles/ReviewsFormStyles";

interface ReviewsFormProps {
  starsValue: number;
  authorName: string;
  reviewMessage: string;
  onRate: ({ rating }: { rating: number }) => void;
  onConfirm: (evt: SyntheticEvent) => Promise<void>;
  handleInputChange: (evt: InputEvent) => void;
  handleMessageChange: (evt: InputEvent) => void;
}

const ReviewsForm = (props: ReviewsFormProps) => {
  const {
    starsValue,
    authorName,
    reviewMessage,
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
      <SubmitButton
        backgroundColor="blue"
        color="white"
        font="teko"
        type="submit"
        value="Wyślij recenzje"
      />
    </StyledReviewsForm>
  );
};

export default ReviewsForm;
