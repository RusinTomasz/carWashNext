import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../styles/breakpoints";
import ClockComponent from "../clock/ClockComponent";

const AdsWrap = styled.div`
  width: 25%;
  padding-left: 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    display: none;
  }
`;

const AdsImagesWrap = styled.div`
  position: relative;
`;

const Ads = () => {
  return (
    <AdsWrap>
      <ClockComponent />
      {/* <AdsImagesWrap>
        <Image src="/img/tmp/rek.jpg" layout="fixed" width={300} height={400} />
        <Image
          src="/img/tmp/rek2.jpg"
          layout="fixed"
          width={300}
          height={200}
        />
      </AdsImagesWrap> */}
    </AdsWrap>
  );
};

export default Ads;
