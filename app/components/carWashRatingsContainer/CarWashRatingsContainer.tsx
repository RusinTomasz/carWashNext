import React from "react";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../styles/breakpoints";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import StarsRater from "../starsRater/StarsRater";
import Image from "next/image";

const CarWashStarsRater = styled(StarsRater)`
  margin-left: 1rem;
`;

const RateCount = styled.p`
  ${maxWidth(breakpoints.md)} {
    padding-top: 3px;
    margin: 0 2rem 0 9rem;
  }
  ${maxWidth(breakpoints.sm)} {
    margin: 0 0.85rem 0 0;
  }
`;

const RateWrap = styled.div`
  padding: 2rem 0;
  position: relative;
  display: inline-block;

  ${maxWidth(breakpoints.md)} {
    width: 70px;
  }
`;

const ServiceRate = styled.p`
  position: relative;
  margin: 0;
  padding: 1rem 0;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-100%);
  font-weight: 500;
  font-size: 26px;
  line-height: 35px;
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: -1rem;
    left: 0.5rem;
    background-repeat: no-repeat;
    background-size: 7rem;
    width: 7rem;
    height: 7rem;
    background-image: url("/img/carWash/background-star.png");
  }
  ${maxWidth(breakpoints.md)} {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: #fff50e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
  }
`;

const RatingLabel = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
`;

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
