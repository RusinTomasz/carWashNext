import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../app/styles/shared/FlexWrapper";
import styled from "styled-components";
import { maxWidth, breakpoints } from "../../../../app/styles/breakpoints";
import { colors } from "../../../../app/styles/variables";
import StarsRater from "../../../../app/components/starsRater/StarsRater";
import Pagination from "../../../../app/components/pagination/Pagination";
import { VoivodeshipParams } from "../index";
import axios from "axios";
import { getCarWashTypeIdByAlias } from "../../../../app/utils/carWashTypes";
import Router from "next/router";
import paginationUtils from "../../../../app/utils/paginationUtils";
import Ads from "../../../../app/components/ads/Ads";

interface CityParams extends VoivodeshipParams {
  city: string;
  queryParam?: string;
}

interface CityProps {
  type: string;
  voivodeship: string;
  city: string;
  page: number;
  limit: number;
  carWashes: any[];
  carWashesCount: number;
}

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

const Content = styled(FlexWrapper)`
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

const City = (props: CityProps) => {
  const {
    type,
    voivodeship,
    city,
    page,
    carWashes,
    carWashesCount,
    limit,
  } = props;
  const startCountingIndex = paginationUtils.countStartingIndex(page, limit);
  const [currentPage, setCurrentPage] = useState(page);
  const [loading, setLoading] = useState(false);
  const [startingIndex, setStartingIndex] = useState(startCountingIndex);

  const carWashListRef = useRef(null);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const onPageChange = (page: number) => {
    const startCountingIndex = paginationUtils.countStartingIndex(page, limit);
    setCurrentPage(page);
    setStartingIndex(startCountingIndex);
    carWashListRef.current.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>Ranking Myjni Podstrona Miasto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container ref={carWashListRef}>
          <FlexWrapper wrap="wrap">
            <ContentWrap>
              <h1>Tymczasowy tytuł</h1>
              {loading && <h1>Loading..</h1>}
              {carWashes.length > 0 &&
                carWashes.map((carWash, index) => (
                  <article key={carWash.id}>
                    <ContentTopBar wrap="wrap" alignItems="center">
                      <TopBarText>
                        {carWash.total_reviews_maps} Zaufanych ocen
                      </TopBarText>
                      <StarsRater
                        total={5}
                        rating={carWash.rating_maps}
                        interactive={true}
                      />
                    </ContentTopBar>
                    <Content alignItems="center">
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

                        <Index>{startingIndex + index + 1}</Index>
                      </ImageWrap>
                      <Wrap>
                        <Link
                          href={`/${type}/${voivodeship}/${city}/${carWash.slug}`}
                        >
                          {carWash.name}
                        </Link>
                        <div>
                          <Address>{carWash.full_address}</Address>
                        </div>
                      </Wrap>
                    </Content>
                  </article>
                ))}
              <Pagination
                page={currentPage}
                onPageChange={onPageChange}
                count={carWashesCount}
                limit={limit}
              />
            </ContentWrap>

            <Ads />
          </FlexWrapper>
        </Container>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { type, voivodeship, city, page }: CityParams = query;
  const currentPage = +page || 1;
  let carWashesData = null;
  let carWashesCount = 0;

  const limit = 5;
  const startIndex = limit * (currentPage - 1);
  const carWashTypeId = getCarWashTypeIdByAlias(type);

  try {
    let carWashesDataUrl = `http://localhost:1337/car-washes?_limit=${limit}&_start=${startIndex}&voivodeship_slug=${voivodeship}&car_wash_type=${carWashTypeId}&city_slug=${city}`;
    let carWashesCountUrl = `http://localhost:1337/car-washes/count?&voivodeship_slug=${voivodeship}&car_wash_type=${carWashTypeId}&city_slug=${city}`;

    const resFirst = await axios.get(carWashesDataUrl);
    const resSecond = await axios.get(carWashesCountUrl);

    if (resFirst.status !== 200 || resSecond.status !== 200) {
      throw new Error("Failed to fetch");
    }
    carWashesData = resFirst.data;
    carWashesCount = resSecond.data;
  } catch (err) {
    carWashesData = { error: { message: err.message } };
  }

  return {
    props: {
      type,
      voivodeship,
      city,
      limit,
      page: currentPage,
      carWashes: carWashesData,
      carWashesCount: carWashesCount,
    },
  };
};

export default City;
