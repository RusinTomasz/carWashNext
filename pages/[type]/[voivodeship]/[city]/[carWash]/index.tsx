import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Ads from "../../../../../app/components/ads/Ads";
import LocationMap from "../../../../../app/components/locationMap/LocationMap";
import OpenHours from "../../../../../app/components/openHours/OpenHours";
import StarsRater from "../../../../../app/components/starsRater/StarsRater";
import { breakpoints, maxWidth } from "../../../../../app/styles/breakpoints";
import BasicButton from "../../../../../app/styles/shared/buttons/BasicButton";
import Container from "../../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../../app/styles/shared/FlexWrapper";
import { colors } from "../../../../../app/styles/variables";
import dynamic from "next/dynamic";
import IrregularitiesModal from "../../../../../app/components/modals/irregularitiesModal/IrregularitiesModal";
import { useState } from "react";

const Map = dynamic(
  import("../../../../../app/components/locationMap/LocationMap"),
  {
    ssr: false,
    loading: () => (
      <div style={{ textAlign: "center", paddingTop: 20 }}>Loading…</div>
    ),
  }
);

const Content = styled.div`
  width: 75%;
  padding-right: 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
  }
`;

const LeftSideWrap = styled.div`
  width: 33.33%;
  position: relative;

  ${maxWidth(breakpoints.lg)} {
    width: 41.66%;
  }
  ${maxWidth(breakpoints.md)} {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const RightSideWrap = styled.div`
  width: 66.66%;

  ${maxWidth(breakpoints.lg)} {
    width: 58.33%;
  }
  ${maxWidth(breakpoints.md)} {
    width: 100%;
    margin-top: 4rem;
    order: -1;
  }
`;

const Name = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
  ${maxWidth(breakpoints.md)} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.carWashAddress};
  margin-top: 0;
  padding-left: 2rem;
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: 0 50%;
  background-image: url("/img/carWash/arrow-gray-right.svg");
  ${maxWidth(breakpoints.md)} {
    font-size: 14px;
    line-height: 18px;
    padding-left: 0;
    background-image: none;
  }
`;

const RatingLabel = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
`;

const ButtonFormWrap = styled.div`
  text-align: right;
`;

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

const PhoneWrap = styled.div`
  margin-top: 2rem;
`;

const PhoneNumber = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: ${colors.lightBlue};
  padding-left: 3rem;
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 0 50%;
  background-image: url("/img/carWash/phone-blue-icon.svg");
`;

const CarWash = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>Myjnia</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css"
        />
      </Head>
      <main>
        <Container>
          <FlexWrapper wrap={"wrap"}>
            <Content>
              <article>
                <FlexWrapper>
                  <LeftSideWrap>
                    {/* It should be removed below 768px */}
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
                    {/* end */}
                    <PhoneWrap>
                      <PhoneNumber href="tel:555555555">
                        555 555 555
                      </PhoneNumber>
                    </PhoneWrap>
                    <OpenHours
                      monday={"9AM–5PM"}
                      tuesday={"9AM–5PM"}
                      wednesday={"9AM–5PM"}
                      thursday={"9AM–5PM"}
                      friday={"9AM–5PM"}
                      saturday={"Closed"}
                      sunday={"Closed"}
                    />
                  </LeftSideWrap>
                  <RightSideWrap>
                    <FlexWrapper wrap={"wrap"}>
                      <div className="title-content">
                        <Name>RR Detailing Auto Spa</Name>
                        <Address>Piękna 22, 08-300 Sokołów Podlaski</Address>
                      </div>
                    </FlexWrapper>

                    <Map position={[50.0647, 20.0704]} />
                    <ButtonFormWrap>
                      <BasicButton
                        backgroundColor={"blue"}
                        color={"white"}
                        onClick={openModal}
                      >
                        Zgłoś nieprawidłowości w opisie
                      </BasicButton>
                    </ButtonFormWrap>
                  </RightSideWrap>
                </FlexWrapper>
              </article>
              {/* <div className="review-container">
                <h2>Opinie</h2>
              </div> */}
            </Content>
            <Ads />
          </FlexWrapper>
        </Container>

        <IrregularitiesModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>
    </>
  );
};

export default CarWash;
