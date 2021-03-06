import React, { SyntheticEvent, useState } from "react";
import addReview from "../../../api/addReview";
import InputEvent from "../../../types/InputEvent";
import FormStatusMessage from "./formStatusMessage/FormStatusMessage";
import ReviewsForm from "./ReviewsForm";
import ReCAPTCHA from "react-google-recaptcha";
import {
  successReviewTitle,
  successReviewMessage,
  errorReviewTitle,
  errorReviewMessage,
} from "../../../constants/formsMessages/FormMessages";

interface ReviewsFormProps {
  refId: number;
}

const ReviewsFormContainer = (props: ReviewsFormProps) => {
  const { refId } = props;
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [starsValue, setStarsValue] = useState(5);
  const [reviewMessage, setReviewMessage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isLoading, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);

  const onConfirm = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    resetErrorsAndSuccessMessages();
    setLoadingStatus(true);

    const addedReview = await addReview({
      authorName: authorName,
      message: reviewMessage,
      starsValue: starsValue,
      refId: refId,
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

  const handleOnFocus = () => {
    if (isFormFocused) {
      return;
    }
    setIsFormFocused(true);
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

  const onCaptchaChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptchaVerified(true);
    }
  };

  return (
    <>
      <ReviewsForm
        recaptchaRef={recaptchaRef}
        onCaptchaChange={onCaptchaChange}
        isCaptchaVerified={isCaptchaVerified}
        onConfirm={onConfirm}
        onRate={onRate}
        starsValue={starsValue}
        authorName={authorName}
        handleInputChange={handleInputChange}
        handleOnFocus={handleOnFocus}
        reviewMessage={reviewMessage}
        handleMessageChange={handleMessageChange}
        isLoading={isLoading}
        isFormFocused={isFormFocused}
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
