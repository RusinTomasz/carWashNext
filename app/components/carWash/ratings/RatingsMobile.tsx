import React from "react";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../styles/breakpoints";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import { colors } from "../../../styles/variables";
import StarsRater from "../../starsRater/StarsRater";

const RateWrapMobile = styled(FlexWrapper)`
  background-color: ${colors.barBlue};
  color: white;
  padding: 0 2rem;
  ${maxWidth(breakpoints.sm)} {
    padding: 0 1.5rem;
  }
`;

const RateMobileCount = styled.p`
  padding-top: 3px;
  margin: 0 2rem 0 9rem;
  ${maxWidth(breakpoints.sm)} {
    margin: 0 0.85rem 0 0;
  }
`;

export const MobileStarsRater = styled(StarsRater)`
  margin-left: 1rem;
`;

interface RatingsMobileProps {
  reviewsCount: number;
  reviewsScore: number;
}

const RatingsMobile = (props: RatingsMobileProps) => {
  const { reviewsCount, reviewsScore } = props;

  return (
    <RateWrapMobile alignItems="center">
      <RateMobileCount>Zaufanych ocen: {reviewsCount}</RateMobileCount>
      <FlexWrapper alignItems="center">
        <MobileStarsRater
          starsLinkColor={"#e5e5e5"}
          total={5}
          rating={reviewsScore}
          interactive={false}
        />
      </FlexWrapper>
    </RateWrapMobile>
  );
};

export default RatingsMobile;
