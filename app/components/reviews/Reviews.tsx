import React, { useState } from "react";
import styled from "styled-components";
import ReviewsForm from "../forms/reviewsForm/ReviewsForm";

const ReviewsWrap = styled.div`
  margin-top: 5rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
`;

const EmptyReviews = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState();

  return (
    <ReviewsWrap>
      <Title>Opinie (55)</Title>
      {reviews ? reviews : <EmptyReviews>Brak opinii</EmptyReviews>}
      <ReviewsForm />
    </ReviewsWrap>
  );
};

export default Reviews;
