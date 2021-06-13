import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Container from "../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../app/styles/shared/FlexWrapper";
import styled from "styled-components";
import { maxWidth, breakpoints } from "../../../../app/styles/breakpoints";
import Pagination from "../../../../app/components/pagination/Pagination";
import { VoivodeshipParams } from "../index";
import axios from "axios";
import { getCarWashTypeIdByAlias } from "../../../../app/utils/carWashTypes";
import Router from "next/router";
import paginationUtils from "../../../../app/utils/paginationUtils";
import Ads from "../../../../app/components/ads/Ads";
import CarWashType from "../../../../app/types/CarWash";
import CarWashesList from "../../../../app/components/carWash/carWashesList/CarWashesList";
import BreadcrumbsComponent from "../../../../app/components/breadcrumbs/Breadcrumbs";

const ContentWrap = styled.div`
  position: relative;
  padding-right: 1.5rem;
  width: 75%;
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
  }
`;

interface CityParams extends VoivodeshipParams {
  city: string;
  queryParam?: string;
}

interface CityProps {
  type: string;
  voivodeship: string;
  city: string;
  cityName: string;
  page: number;
  limit: number;
  carWashes: CarWashType[];
  carWashesCount: number;
  canonicalUrl: string;
}

const City = (props: CityProps) => {
  const {
    type,
    cityName,
    page,
    carWashes,
    carWashesCount,
    limit,
    canonicalUrl,
  } = props;

  const startCountingIndex = paginationUtils.countStartingIndex(page, limit);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const [startingIndex, setStartingIndex] = useState(startCountingIndex);

  const carWashListRef = useRef(null);

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
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Container ref={carWashListRef}>
          <FlexWrapper wrap="wrap">
            <ContentWrap>
              <h1>
                {cityName} ({type})
              </h1>
              {carWashes.length > 0 && (
                <>
                  <CarWashesList
                    type={type}
                    startingIndex={startingIndex}
                    loading={loading}
                    carWashes={carWashes}
                  />
                  <Pagination
                    page={currentPage}
                    onPageChange={onPageChange}
                    count={carWashesCount}
                    limit={limit}
                  />
                </>
              )}
            </ContentWrap>
            <Ads />
          </FlexWrapper>
        </Container>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const { type, voivodeship, city, page }: CityParams = query;

  const currentPage = +page || 1;
  let carWashesData = null;
  let carWashesCount = 0;
  let cityName = null;
  const limit = 5;
  const startIndex = limit * (currentPage - 1);
  const carWashTypeId = getCarWashTypeIdByAlias(type);

  try {
    let carWashesDataUrl = `${process.env.NEXT_PUBLIC_HOST}/car-washes?_limit=${limit}&_start=${startIndex}&voivodeship_slug=${voivodeship}&car_wash_type=${carWashTypeId}&city_slug=${city}`;
    let carWashesCountUrl = `${process.env.NEXT_PUBLIC_HOST}/car-washes/count?&voivodeship_slug=${voivodeship}&car_wash_type=${carWashTypeId}&city_slug=${city}`;
    let citiesByCurrentVoivodeshipUrl = `${process.env.NEXT_PUBLIC_HOST}/car-washes/cities/${type}/${voivodeship}`;

    const resFirst = await axios.get(carWashesDataUrl);
    const resSecond = await axios.get(carWashesCountUrl);
    const resThird = await axios.get(citiesByCurrentVoivodeshipUrl);

    if (
      resFirst.status !== 200 ||
      resSecond.status !== 200 ||
      resThird.status !== 200
    ) {
      throw new Error("Failed to fetch");
    }

    carWashesData = resFirst.data;
    carWashesCount = resSecond.data;

    const currentCityObj = resThird.data.filter(
      (cityObj: { name: string; slug: string }) => cityObj.slug === city
    );
    cityName = currentCityObj[0].name;
  } catch (err) {
    carWashesData = { error: { message: err.message } };
  }
  return {
    props: {
      type,
      voivodeship,
      city,
      cityName,
      limit,
      page: currentPage,
      carWashes: carWashesData,
      carWashesCount: carWashesCount,
      canonicalUrl: `https://${req.headers.host}${req.url}`,
    },
  };
};

export default City;
