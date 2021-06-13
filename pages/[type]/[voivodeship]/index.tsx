import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import carWashTypes from "../../../app/utils/carWashTypes";
import VoivodeshipType from "../../../app/types/Voivodeship";
import axios from "axios";
import City from "../../../app/types/City";
import Container from "../../../app/styles/shared/Container";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../app/styles/breakpoints";
import { colors } from "../../../app/styles/variables";
import BreadcrumbsComponent from "../../../app/components/breadcrumbs/Breadcrumbs";
import LoadingScreen from "../../../app/components/loadingScreen/LoadingScreen";

export interface VoivodeshipParams extends ParsedUrlQuery {
  type: string;
  voivodeship: string;
}

interface VoivodeshipProps {
  type: string;
  voivodeship: string;
  cities: City[];
  isCitiesError: boolean;
}

const Title = styled.h1`
  margin: 2rem 0 4rem;
  text-align: center;
`;

const CitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const CitiesListItem = styled.li`
  width: 25%;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  margin: 0.25rem 0;
  ${maxWidth(breakpoints.lg)} {
    width: 50%;
    margin: 0;
  }
`;

const CitiesListLint = styled.a`
  padding: 5px 10px;
  ${maxWidth(breakpoints.sm)} {
    font-size: 12px;
  }
  &:hover {
    background-color: ${colors.yellow};
  }
`;

const Voivodeship = (props: VoivodeshipProps) => {
  const { cities, type, voivodeship } = props;

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ranking Myjni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Container>
          <Title>Wszystkie miasta</Title>
          <CitiesList>
            {cities.map((city, index) => (
              <CitiesListItem key={index}>
                <Link href={`/${type}/${voivodeship}/${city.slug}`} passHref>
                  <CitiesListLint>{city.name}</CitiesListLint>
                </Link>
              </CitiesListItem>
            ))}
          </CitiesList>
        </Container>
      </main>
      {loading && <LoadingScreen />}
    </>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext<VoivodeshipParams>
) {
  const { type, voivodeship }: VoivodeshipParams = context.params;

  interface Props {
    type: string;
    voivodeship: string;
    cities: City[];
    isCitiesError: boolean;
  }

  const props: Props = {
    type: type,
    voivodeship: voivodeship,
    cities: [],
    isCitiesError: false,
  };

  try {
    const citiesResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes/cities/${type}/${voivodeship}?_limit=6000`
    );
    props.cities = citiesResponse.data;
  } catch (err) {
    props.isCitiesError = true;
    console.log(err);
  }

  return {
    props: {
      type: props.type,
      voivodeship: props.voivodeship,
      cities: props.cities,
      isCitiesError: props.isCitiesError,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  let carWashTypesAliases: string[] = [];

  let allVoivodeships: VoivodeshipType[] = [];

  Object.keys(carWashTypes).map((el) => {
    carWashTypesAliases.push(carWashTypes[el].alias);
  });

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/car-washes/voivodeships?_limit=6000`
  );

  if (response.status === 200) {
    allVoivodeships = response.data;
  }

  const paths = carWashTypesAliases.map((type: string) => {
    const paramsArr = allVoivodeships.map((voivodeship: VoivodeshipType) => {
      const params = {
        params: {
          type: type,
          voivodeship: voivodeship.slug,
        },
      };
      return params;
    });
    return paramsArr;
  });

  return {
    paths: paths.flat(1),
    fallback: false,
  };
}

export default Voivodeship;
