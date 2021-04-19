import React from "react";
import CarWashType from "../../../types/CarWash";
import Review from "../../../types/Review";
import ReviewsForm from "../../forms/reviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import ReviewsModalList from "./reviewsModalList/ReviewsModalList";
import { ReviewsWrap, Title } from "./styles/ReviewStyles";

interface ReviewsProps {
  reviews: Review[];
  reviewsCount: number;
  reviewsScore: number;
  isModalOpen: boolean;
  carWashData: CarWashType;
  handleCloseModal: () => void;
  openModal: () => void;
}

const Reviews = (props: ReviewsProps) => {
  const {
    reviews,
    reviewsCount,
    isModalOpen,
    carWashData,
    reviewsScore,
    handleCloseModal,
    openModal,
  } = props;

  return (
    <ReviewsWrap>
      <Title>Opinie ({reviewsCount})</Title>
      <ReviewsList reviews={reviews.slice(0, 5)} />
      <ReviewsModalList
        reviewsCount={reviewsCount}
        reviewsScore={reviewsScore}
        carWashData={carWashData}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
        reviews={reviews}
      />
      <ReviewsForm />
    </ReviewsWrap>
  );
};

export default Reviews;
