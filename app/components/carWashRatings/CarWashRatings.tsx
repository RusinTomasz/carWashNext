import React from "react";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import Image from "next/image";
import {
  CarWashStarsRater,
  RateCount,
  RateWrap,
  ServiceRate,
  RatingLabel,
} from "./styles/CarWashRatingsStyles";

const CarWashRatingsContainer = () => {
  return (
    <>
      <RateWrap>
        <Image
          src="/img/city/autospa-default.jpg"
          width={175}
          height={175}
          className="radius-50"
        />
        <ServiceRate>4.3</ServiceRate>
      </RateWrap>
      <RateCount>Zaufanych ocen: 55</RateCount>
      <FlexWrapper alignItems={"center"}>
        <RatingLabel>Ocena:</RatingLabel>
        <CarWashStarsRater
          starsLinkColor={"#e5e5e5"}
          total={5}
          rating={4}
          interactive={false}
        />
      </FlexWrapper>
    </>
  );
};

export default CarWashRatingsContainer;
