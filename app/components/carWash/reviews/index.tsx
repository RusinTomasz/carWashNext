import React from "react";
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

  return (
    <>
      {!isCarWashFetchReviewsError ? (
        <Reviews reviews={reviews} reviewsCount={reviewsCount} />
      ) : (
        <ErrorCarWashReviewsUI />
      )}
    </>
  );
};

export default ReviewsContainer;
