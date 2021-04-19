import React from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import CarWashType from "../../../types/CarWash";
import Review from "../../../types/Review";
import ReviewsList from "../../carWash/reviews/reviewsList/ReviewsList";
import { CloseButton } from "../styles/GlobalModalsStyles";
import { Title, StyledReviewsModal, Label } from "./styles/ReviewsModalStyles";

interface ReviewsModalProps {
  isModalOpen: boolean;
  reviews: Review[];
  carWashData: CarWashType;
  reviewsScore: number;
  reviewsCount: number;
  onClose: () => void;
}

const ReviewsModal = (props: ReviewsModalProps) => {
  const {
    carWashData,
    reviewsScore,
    reviewsCount,
    reviews,
    isModalOpen,
    onClose,
  } = props;

  return (
    <StyledReviewsModal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="Irregularities Modal"
      ariaHideApp={false}
    >
      <CloseButton onClick={onClose}>X</CloseButton>

      <FlexWrapper justifyContent="center" wrap="wrap">
        <Title>{carWashData.name}</Title>
        <Label>
          Ocena: {reviewsScore ? reviewsScore.toFixed(1) : "0.0"} (
          {reviewsCount} ocen)
        </Label>
      </FlexWrapper>

      <ReviewsList reviews={reviews} />
    </StyledReviewsModal>
  );
};

export default ReviewsModal;
