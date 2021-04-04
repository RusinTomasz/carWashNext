import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import carWashesTmp from "../../../../app/tmp/CarWashes";
import Container from "../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../app/styles/shared/FlexWrapper";
import styled from "styled-components";
import { maxWidth, breakpoints } from "../../../../app/styles/breakpoints";
import { colors } from "../../../../app/styles/variables";

const ContentTopBar = styled(FlexWrapper)`
  background-color: ${colors.barBlue};
  color: white;
  padding: 0 2rem;
  ${maxWidth(breakpoints.sm)} {
    padding: 0 1.5rem;
  }
`;

const TopBarText = styled.p`
  margin: 0 2rem 0 9rem;
  ${maxWidth(breakpoints.sm)} {
    margin: 0 0.85rem 0 0;
  }
`;

const CarWashContent = styled(FlexWrapper)`
  padding: 2rem 1rem;
`;

const ImageWrap = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  ${maxWidth(breakpoints.sm)} {
    width: 70px;
  }
`;

const Index = styled.span`
  position: absolute;
  bottom: -0.3rem;
  right: -0.7rem;
  width: 35px;
  height: 35px;
  background-color: ${colors.yellow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const Wrap = styled.div`
  width: calc(100% - 110px);
  margin-left: 3rem;
  ${maxWidth(breakpoints.sm)} {
    width: calc(100% - 90px);
    margin-left: 2rem;
  }
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.grayText};
  margin-top: 0.5rem;
  padding-left: 2.5rem;
  position: relative;
  ${maxWidth(breakpoints.sm)} {
    padding-left: 0;
    font-size: 14px;
    line-height: 18px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 2rem;
    height: 2rem;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: center;
    background-image: url("/img/city/arrow-gray-right.svg");
    ${maxWidth(breakpoints.sm)} {
      display: none;
    }
  }
`;

const ContentWrap = styled.div`
  padding-right: 1.5rem;
  width: 75%;
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
  }
`;

const AdsWrap = styled.div`
  width: 25%;
  padding-left: 1.5rem;
  ${maxWidth(breakpoints.md)} {
    display: none;
  }
`;

const AdsImagesWrap = styled.div`
  position: relative;
`;

const City = () => {
  // http://localhost:1337/car-washes?car_wash_type=2&voivodeship=ma%C5%82opolskie&city=Bochnia ------ Api url

  //Temporary hardcoded
  const carWashes = carWashesTmp;
  let currentPositionStartIndex = 0;
  const type = "autospa";
  const voivodeship = "malopolskie";
  const city = "bochnia";
  const carWashAlias = "alias";

  return (
    <>
      <Head>
        <title>Ranking Myjni Podstrona Miasto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <FlexWrapper wrap="wrap">
            <ContentWrap>
              <h1>Tymczasowy tytuł</h1>
              {carWashes.map((carWash, index) => (
                <article key={carWash.id}>
                  <ContentTopBar wrap="wrap" alignItems="center">
                    <TopBarText>
                      {carWash.total_reviews_maps} Zaufanych ocen
                    </TopBarText>
                    {/* <Rater
                      total={5}
                      rating={carWash.rating_maps}
                      interactive={false}
                    /> */}
                  </ContentTopBar>
                  <CarWashContent alignItems="center">
                    <ImageWrap>
                      {type === "autospa" ? (
                        <Image
                          src="/img/city/autospa-default.jpg"
                          layout="fill"
                          className="radius-50"
                        />
                      ) : (
                        <Image
                          src="/img/citys/bezdot-default.jpg"
                          layout="fill"
                          className="radius-50"
                        />
                      )}

                      <Index>{currentPositionStartIndex + index + 1}</Index>
                    </ImageWrap>
                    <Wrap>
                      <Link
                        href={`/${type}/${voivodeship}/${city}${carWashAlias}`}
                      >
                        {carWash.name}
                      </Link>
                      <div>
                        <Address>{carWash.full_address}</Address>
                      </div>
                    </Wrap>
                  </CarWashContent>
                </article>
              ))}
            </ContentWrap>

            <AdsWrap>
              <AdsImagesWrap>
                <Image
                  src="/img/tmp/rek.jpg"
                  layout="fixed"
                  width={300}
                  height={400}
                />
                <Image
                  src="/img/tmp/rek2.jpg"
                  layout="fixed"
                  width={300}
                  height={200}
                />
              </AdsImagesWrap>
            </AdsWrap>
          </FlexWrapper>
        </Container>
      </main>
    </>
  );
};

export default City;
