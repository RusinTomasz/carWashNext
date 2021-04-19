import React from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import Image from "next/image";
import {
  CarWashStarsRater,
  RateCount,
  RateWrap,
  ServiceRate,
  RatingLabel,
} from "./styles/RatingsStyles";

interface RatingsProps {
  reviewsCount: number;
  reviewsScore: number;
}

const Ratings = (props: RatingsProps) => {
  const { reviewsCount, reviewsScore } = props;

  return (
    <>
      <RateWrap>
        <Image
          src="/img/city/autospa-default.jpg"
          width={175}
          height={175}
          className="radius-50"
        />
        <ServiceRate>{reviewsScore && reviewsScore.toFixed(1)}</ServiceRate>
      </RateWrap>
      <RateCount>Zaufanych ocen: {reviewsCount}</RateCount>
      <FlexWrapper alignItems={"center"}>
        <RatingLabel>Ocena:</RatingLabel>
        <CarWashStarsRater
          starsLinkColor={"#e5e5e5"}
          total={5}
          rating={reviewsScore}
          interactive={false}
        />
      </FlexWrapper>
    </>
  );
};

export default Ratings;
