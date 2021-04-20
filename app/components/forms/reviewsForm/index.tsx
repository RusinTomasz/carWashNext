import React, { SyntheticEvent, useState } from "react";
import addReview from "../../../api/addReview";
import InputEvent from "../../../types/InputEvent";
import FormStatusMessage from "./formStatusMessage/FormStatusMessage";
import ReviewsForm from "./ReviewsForm";
import {
  successReviewTitle,
  successReviewMessage,
  errorReviewTitle,
  errorReviewMessage,
} from "../../../constants/formsMessages/FormMessages";

const ReviewsFormContainer = () => {
  const [starsValue, setStarsValue] = useState(5);
  const [reviewMessage, setReviewMessage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isLoading, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onConfirm = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    resetErrorsAndSuccessMessages();
    setLoadingStatus(true);

    const addedReview = await addReview({
      authorName: authorName,
      message: reviewMessage,
      starsValue: starsValue,
      refId: 2639,
    });

    setLoadingStatus(false);

    if (!addedReview) {
      setError(true);
      return;
    }
    setSuccess(true);
    resetForm();
  };

  const onRate = ({ rating }: { rating: number }) => {
    setStarsValue(rating);
  };

  const handleMessageChange = (evt: InputEvent): void => {
    const value: string = evt.target.value;
    setReviewMessage(value);
  };

  const handleInputChange = (evt: InputEvent): void => {
    const value: string = evt.target.value;
    setAuthorName(value);
  };

  const resetForm = (): void => {
    setAuthorName("");
    setReviewMessage("");
    setStarsValue(5);
  };

  const resetErrorsAndSuccessMessages = (): void => {
    setSuccess(false);
    setError(false);
  };

  return (
    <>
      <ReviewsForm
        onConfirm={onConfirm}
        onRate={onRate}
        starsValue={starsValue}
        authorName={authorName}
        handleInputChange={handleInputChange}
        reviewMessage={reviewMessage}
        handleMessageChange={handleMessageChange}
        isLoading={isLoading}
      />

      {isSuccess && (
        <FormStatusMessage
          title={successReviewTitle}
          message={successReviewMessage}
          type="success"
        />
      )}
      {isError && (
        <FormStatusMessage
          title={errorReviewTitle}
          message={errorReviewMessage}
          type="error"
        />
      )}
    </>
  );
};

export default ReviewsFormContainer;
