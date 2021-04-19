import React from "react";
import ErrorCarWashReviewsUI from "../../errors/ErrorCarWashReviewsUI";
import Reviews from "./Reviews";

interface ReviewsContainerProps {
  isCarWashFetchReviewsError: boolean;
  reviews: any;
}

const ReviewsContainer = (props: ReviewsContainerProps) => {
  const { isCarWashFetchReviewsError, reviews } = props;

  return (
    <>
      {!isCarWashFetchReviewsError ? (
        <Reviews reviews={reviews} />
      ) : (
        <ErrorCarWashReviewsUI />
      )}
    </>
  );
};

export default ReviewsContainer;
