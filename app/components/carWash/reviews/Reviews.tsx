import React, { useState } from "react";
import ReviewsForm from "../../forms/reviewsForm/ReviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import { ReviewsWrap, Title, EmptyReviews } from "./styles/ReviewStyles";

interface ReviewsProps {
  reviews: any;
}

const Reviews = (props: ReviewsProps) => {
  const { reviews } = props;

  return (
    <ReviewsWrap>
      <Title>Opinie (55)</Title>
      <ReviewsList reviews={reviews} />
      <ReviewsForm />
    </ReviewsWrap>
  );
};

export default Reviews;
