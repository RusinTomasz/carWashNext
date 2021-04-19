import React from "react";
import Review from "../../../types/Review";
import ReviewsForm from "../../forms/reviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import ReviewsModalList from "./reviewsModalList/ReviewsModalList";
import { ReviewsWrap, Title } from "./styles/ReviewStyles";

interface ReviewsProps {
  reviews: Review[];
  reviewsCount: number;
  isModalOpen: boolean;
  handleCloseModal: () => void;
  openModal: () => void;
}

const Reviews = (props: ReviewsProps) => {
  const {
    reviews,
    reviewsCount,
    isModalOpen,
    handleCloseModal,
    openModal,
  } = props;

  return (
    <ReviewsWrap>
      <Title>Opinie ({reviewsCount})</Title>
      <ReviewsList reviews={reviews} />
      <ReviewsModalList
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
      <ReviewsForm />
    </ReviewsWrap>
  );
};

export default Reviews;
