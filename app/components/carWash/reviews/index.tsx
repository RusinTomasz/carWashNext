import React, { useState } from "react";
import Review from "../../../types/Review";
import ErrorCarWashReviewsUI from "../../errors/ErrorCarWashReviewsUI";
import Reviews from "./Reviews";

interface ReviewsContainerProps {
  isCarWashFetchReviewsError: boolean;
  reviews: Review[];
  reviewsCount: number;
}

const ReviewsContainer = (props: ReviewsContainerProps) => {
  const { isCarWashFetchReviewsError, reviews, reviewsCount } = props;

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
          isModalOpen={isModalOpen}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          reviews={reviews}
          reviewsCount={reviewsCount}
        />
      ) : (
        <ErrorCarWashReviewsUI />
      )}
    </>
  );
};

export default ReviewsContainer;
