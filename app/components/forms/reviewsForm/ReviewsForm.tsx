import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import SubmitInput from "../../../styles/shared/inputs/SubmitInput";
import { fontFamilies } from "../../../styles/variables";
import InputEvent from "../../../types/InputEvent";
import StarsRater from "../../starsRater/StarsRater";

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
`;

const TextArea = styled.textarea`
  font-family: ${fontFamilies.exo};
  font-size: 14px;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: 1px solid #a6a6a6;
  box-shadow: none;
  outline: none;
`;

const SubmitButton = styled(SubmitInput)`
  margin-top: 3rem;
  outline: none;
`;

const StarsRaterReview = styled(StarsRater)`
  margin-left: 1rem;
`;

const ReviewsForm = () => {
  const [starsValue, setStarsValue] = useState(1);
  const [reviewMessage, setReviewMessage] = useState("");

  const onConfirm = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("its confirm");
  };

  const onRate = ({ rating }: { rating: number }) => {
    setStarsValue(rating);
  };

  const handleMessageChange = (evt: InputEvent): void => {
    const value: string = evt.target.value;
    setReviewMessage(value);
  };

  return (
    <form onSubmit={onConfirm}>
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
      <TextArea
        rows={4}
        cols={50}
        value={reviewMessage}
        placeholder="Wpisz treść opinii"
        onChange={handleMessageChange}
        required
      />
      <div>
        <SubmitButton
          backgroundColor="blue"
          color="white"
          font="teko"
          type="submit"
          value="Wyślij recenzje"
        />
      </div>
    </form>
  );
};

export default ReviewsForm;
