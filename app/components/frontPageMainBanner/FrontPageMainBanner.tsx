import Image from "next/image";
import React from "react";

// Styles
import styled from "styled-components";
import { colors, fontFamilies } from "../../styles/variables";
import { maxWidth, breakpoints } from "../../styles/breakpoints";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import SearchForm from "../forms/searchForm";

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
  ${maxWidth(breakpoints.lg)} {
    font-size: 52px;
    line-height: 58px;
  }
  ${maxWidth(breakpoints.md)} {
    font-size: 42px;
    line-height: 50px;
    margin: 1rem 0;
  }
  ${maxWidth(breakpoints.sm)} {
    text-align: center;
    font-size: 36px;
    line-height: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: ${fontFamilies.teko};
  font-size: 36px;
  line-height: 48px;
  text-transform: uppercase;
  color: ${colors.yellow};
  padding: 0 1.5rem;

  ${maxWidth(breakpoints.md)} {
    margin: 1rem 0;
  }
  ${maxWidth(breakpoints.sm)} {
    text-align: center;
    font-size: 28px;
    letter-spacing: 1px;
    margin-top: 0;
  }
`;

const ContentWrap = styled.div`
  z-index: 1;

  ${maxWidth(breakpoints.sm)} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
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
        <SearchForm />
      </ContentWrap>
      <Image
        priority={true}
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
