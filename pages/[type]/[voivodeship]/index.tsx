import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";
import carWashTypes from "../../../app/utils/carWashTypes";
import VoivodeshipType from "../../../app/types/Voivodeship";
import axios from "axios";
import City from "../../../app/types/City";

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

const Voivodeship = (props: VoivodeshipProps) => {
  const { cities, type, voivodeship, isCitiesError } = props;

  return (
    <>
      <Head>
        <title>Ranking Myjni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container single-voivo-container">
          <ul className="cities-list list-grid">
            <div className="row">
              <h2 className="col-12 main-secondary-title text-center">
                Wszystkie miasta
              </h2>
              {cities.map((city, index) => (
                <li className="col-6 col-sm-6 col-md-3 list-item" key={index}>
                  <Link href={`/${type}/${voivodeship}/${city.slug}`}>
                    {city.name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </main>
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
