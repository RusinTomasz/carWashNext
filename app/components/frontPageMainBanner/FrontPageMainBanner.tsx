import Image from "next/image";
import React from "react";

// Styles
import styled from "styled-components";
import { colors, fontFamilies } from "../../styles/variables";
import FlexWrapper from "../../styles/shared/FlexWrapper";

const FrontPageMainBannerContainer = styled(FlexWrapper)`
  height: 500px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 62px;
  line-height: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
  padding: 0 1.5rem;
`;

const Subtitle = styled.p`
  font-family: ${fontFamilies.teko};
  font-size: 36px;
  line-height: 48px;
  text-transform: uppercase;
  color: ${colors.yellow};
  padding: 0 1.5rem;
`;

const ContentWrap = styled.div`
  z-index: 1;
`;

const FrontPageMainBanner = () => {
  return (
    <FrontPageMainBannerContainer
      justifyContent="center"
      wrap="wrap"
      alignItems="center"
    >
      <ContentWrap>
        <Title>Znajdź najlepszą myjnię</Title>
        <Subtitle>W twojej lokalizacji!</Subtitle>
        {/* <Search /> */}
      </ContentWrap>
      <Image
        className="bg-index"
        src="/img/frontPageMainBanner/main-image-big.jpg"
        alt="Mycie szyby gąbką"
        layout="fill"
        objectFit="cover"
      />
    </FrontPageMainBannerContainer>
  );
};

export default FrontPageMainBanner;
