import React, { SyntheticEvent, useState } from "react";
import addReview from "../../../api/addReview";
import InputEvent from "../../../types/InputEvent";
import FormStatusMessage from "./formStatusMessage/FormStatusMessage";
import ReviewsForm from "./ReviewsForm";

const ReviewsFormContainer = () => {
  const successTitle = "Gratulacje - Twoja opinia została przesłana";
  const successMessage =
    "Gratulacje Twoja opinia została przesłana. Opinia wymaga zatwierdzenia przez administora. Powinna pojawić się w ciągu 24h.";
  const errorTitle = "Błąd - Nie udało się wysłać opinii";
  const errorMessage =
    "Niestety nie udało się przesłać Twojej opinii. Spróbuj ponownie później.";
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
          title={successTitle}
          message={successMessage}
          type="success"
        />
      )}
      {isError && (
        <FormStatusMessage
          title={errorTitle}
          message={errorMessage}
          type="error"
        />
      )}
    </>
  );
};

export default ReviewsFormContainer;
