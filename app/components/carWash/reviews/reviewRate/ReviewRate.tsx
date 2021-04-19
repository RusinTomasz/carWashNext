import React from "react";
import {
  RaterWrap,
  ReviewRateWrap,
  ReviewSmallText,
} from "./styles/ReviewRateStyles";

interface ReviewRateProps {
  rate: number;
}

const ReviewRate = (props: ReviewRateProps) => {
  const { rate } = props;

  return (
    <RaterWrap>
      <ReviewRateWrap>
        <ReviewSmallText>Ocena:</ReviewSmallText>
        {rate && rate.toFixed(1)}
      </ReviewRateWrap>
    </RaterWrap>
  );
};

export default ReviewRate;
