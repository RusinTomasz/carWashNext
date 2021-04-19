import React from "react";
import Review from "../../../types/Review";
import ReviewsForm from "../../forms/reviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import { ReviewsWrap, Title, EmptyReviews } from "./styles/ReviewStyles";

interface ReviewsProps {
  reviews: Review[];
  reviewsCount: number;
}

const Reviews = (props: ReviewsProps) => {
  const { reviews, reviewsCount } = props;

  return (
    <ReviewsWrap>
      <Title>Opinie ({reviewsCount})</Title>
      <ReviewsList reviews={reviews} />
      <ReviewsForm />
    </ReviewsWrap>
  );
};

export default Reviews;
