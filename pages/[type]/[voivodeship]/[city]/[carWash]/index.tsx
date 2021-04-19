import Head from "next/head";
import styled from "styled-components";
import Ads from "../../../../../app/components/ads/Ads";
import { breakpoints, maxWidth } from "../../../../../app/styles/breakpoints";
import Container from "../../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../../app/styles/shared/FlexWrapper";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "node:querystring";
import { getCarWashTypeAliasById } from "../../../../../app/utils/carWashTypes";
import CarWashType from "../../../../../app/types/CarWash";
import Content from "../../../../../app/components/carWash/content";
import Reviews from "../../../../../app/components/carWash/reviews";
import { reviews } from "../../../../../app/components/carWash/reviews/mockData/MOCK_REVIEWS";

interface CarWashParams extends ParsedUrlQuery {
  carWash: string;
}

interface CarWashProps {
  carWashData: CarWashType;
  isCarWashFetchDataError: boolean;
  isCarWashFetchReviewsError: boolean;
}

const ContentWrap = styled.div`
  width: 75%;
  padding-right: 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
  }
`;

const CarWash = (props: CarWashProps) => {
  const {
    carWashData,
    isCarWashFetchDataError,
    isCarWashFetchReviewsError,
  } = props;

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
            <ContentWrap>
              <Content
                carWashData={carWashData}
                isCarWashFetchDataError={isCarWashFetchDataError}
              />
              <Reviews
                reviews={reviews}
                isCarWashFetchReviewsError={isCarWashFetchReviewsError}
              />
            </ContentWrap>
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
    isCarWashFetchDataError: boolean;
    carWashReviews: any[] | null;
    isCarWashFetchReviewsError: boolean;
  }

  const props: Props = {
    carWashData: null,
    isCarWashFetchDataError: false,
    carWashReviews: null,
    isCarWashFetchReviewsError: false,
  };

  try {
    const carWashResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/car-washes?slug=${carWash}`
    );
    props.carWashData = carWashResponse.data[0];
  } catch (err) {
    props.isCarWashFetchDataError = true;
    console.log(err);
  }

  try {
    const carWashCommentsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/comments/car-wash:${props.carWashData.id}`
    );
    props.carWashReviews = carWashCommentsResponse.data;
  } catch (err) {
    props.isCarWashFetchReviewsError = true;
    console.log(err);
  }

  return {
    props: {
      carWashData: props.carWashData,
      carWashFetchDataError: props.isCarWashFetchDataError,
      carWashReviews: props.carWashReviews,
      carWashFetchReviewsError: props.isCarWashFetchReviewsError,
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
