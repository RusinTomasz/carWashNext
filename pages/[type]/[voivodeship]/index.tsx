import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";

interface Params extends ParsedUrlQuery {
  type: string;
  voivodeship: string;
}

interface VoivodeshipProps {
  type: string;
  voivodeship: string;
}

const cities = [
  {
    slug: "bialka-tatrzanska",
    name: "Białka Tatrzańska",
  },
  {
    slug: "bochnia",
    name: "Bochnia",
  },
  {
    slug: "brnik",
    name: "Brnik",
  },
  {
    slug: "brzesko",
    name: "Brzesko",
  },
  {
    slug: "brzeszcze",
    name: "Brzeszcze",
  },
  {
    slug: "brzezie",
    name: "Brzezie",
  },
  {
    slug: "chelm",
    name: "Chełm",
  },
  {
    slug: "chelmek",
    name: "Chełmek",
  },
];

const Voivodeship = ({ type, voivodeship }: VoivodeshipProps) => {
  return (
    <>
      <Head>
        <title>Ranking Myjni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="page-wrap">
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

export function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { type, voivodeship }: Params = context.params;

  return {
    props: {
      type,
      voivodeship,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { type: "autospa", voivodeship: "malopolska" } }],
    fallback: false,
  };
}

export default Voivodeship;
