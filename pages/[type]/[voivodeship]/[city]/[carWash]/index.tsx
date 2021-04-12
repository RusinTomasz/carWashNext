import Head from "next/head";
import styled from "styled-components";
import Ads from "../../../../../app/components/ads/Ads";
import { breakpoints, maxWidth } from "../../../../../app/styles/breakpoints";
import Container from "../../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../../app/styles/shared/FlexWrapper";
import Reviews from "../../../../../app/components/reviews/Reviews";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "node:querystring";
import { getCarWashTypeAliasById } from "../../../../../app/utils/carWashTypes";
import CarWashType from "../../../../../app/types/CarWash";
import CarWashContentContainer from "../../../../../app/components/carWashContentContainer/CarWashContentContainer";
import { useState } from "react";

interface CarWashParams extends ParsedUrlQuery {
  carWash: string;
}

interface CarWashProps {
  carWashData: CarWashType;
  carWashFetchDataError: any;
  carWashFetchReviewsError: any;
}

const Content = styled.div`
  width: 75%;
  padding-right: 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
  }
`;

const CarWash = (props: CarWashProps) => {
  const {
    carWashData,
    carWashFetchDataError,
    carWashFetchReviewsError,
  } = props;

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
              <CarWashContentContainer
                carWashData={carWashData}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                isModalOpen={isModalOpen}
              />
              <Reviews />
              {/* Needs to be implement as react Errors  */}
              {carWashFetchDataError && (
                <h2>
                  Przepraszamy nie udało się załoadować strony, spróbuj ponownie
                  później.
                </h2>
              )}
              {/* end */}
            </Content>
            <Ads />
          </FlexWrapper>
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext<CarWashParams>
) {
  const { carWash } = context.params;

  interface Props {
    carWashData: CarWashType | null;
    carWashFetchDataError: any;
    carWashReviews: any[] | null;
    carWashFetchReviewsError: any;
  }

  const props: Props = {
    carWashData: null,
    carWashFetchDataError: null,
    carWashReviews: null,
    carWashFetchReviewsError: null,
  };

  try {
    const carWashResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes?slug=${carWash}`
    );
    props.carWashData = carWashResponse.data[0];
  } catch (err) {
    props.carWashFetchDataError = "Car wash response error";
  }

  try {
    const carWashCommentsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/comments/car-wash:${props.carWashData.id}`
    );
    props.carWashReviews = carWashCommentsResponse.data;
  } catch (err) {
    props.carWashFetchReviewsError = "Car wash comments response error";
  }

  return {
    props: {
      carWashData: props.carWashData,
      carWashFetchDataError: props.carWashFetchDataError,
      carWashReviews: props.carWashReviews,
      carWashFetchReviewsError: props.carWashFetchReviewsError,
    },
  };
}

export async function getStaticPaths() {
  let allCarWashes = [];

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/car-washes?_limit=6000`
  );

  if (response.status === 200) {
    allCarWashes = response.data;
  }

  const paths = allCarWashes.map((carWash: CarWashType) => {
    const carWashTypeAlias = getCarWashTypeAliasById(carWash.car_wash_type.id);
    const params = {
      params: {
        type: carWashTypeAlias,
        voivodeship: carWash.voivodeship_slug,
        city: carWash.city_slug,
        carWash: carWash.slug,
      },
    };
    return params;
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default CarWash;
