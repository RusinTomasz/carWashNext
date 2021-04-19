import React, { useState } from "react";
import CarWashType from "../../../types/CarWash";
import Review from "../../../types/Review";
import ErrorCarWashReviewsUI from "../../errors/ErrorCarWashReviewsUI";
import Reviews from "./Reviews";

interface ReviewsContainerProps {
  isCarWashFetchReviewsError: boolean;
  reviews: Review[];
  carWashData: CarWashType;
  reviewsCount: number;
  reviewsScore: number;
}

const ReviewsContainer = (props: ReviewsContainerProps) => {
  const {
    carWashData,
    isCarWashFetchReviewsError,
    reviews,
    reviewsCount,
    reviewsScore,
  } = props;

  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {!isCarWashFetchReviewsError ? (
        <Reviews
          carWashData={carWashData}
          isModalOpen={isModalOpen}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          reviews={reviews}
          reviewsCount={reviewsCount}
          reviewsScore={reviewsScore}
        />
      ) : (
        <ErrorCarWashReviewsUI />
      )}
    </>
  );
};

export default ReviewsContainer;
