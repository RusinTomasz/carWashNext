import Image from "next/image";
import React from "react";
import { MobileServiceRate, MobileRatingWrap } from "./styles/RatingsStyles";

interface HeaderRatingMobileProps {
  reviewsScore: number;
}

const HeaderRatingMobile = (props: HeaderRatingMobileProps) => {
  const { reviewsScore } = props;
  return (
    <MobileRatingWrap>
      <Image
        src="/img/city/autospa-default.jpg"
        width={50}
        height={50}
        className="radius-50"
      />
      <MobileServiceRate>
        {reviewsScore ? reviewsScore.toFixed(1) : "0.0"}
      </MobileServiceRate>
    </MobileRatingWrap>
  );
};

export default HeaderRatingMobile;
