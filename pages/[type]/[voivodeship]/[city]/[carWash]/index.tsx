import Head from "next/head";
import styled from "styled-components";
import Ads from "../../../../../app/components/ads/Ads";
import { breakpoints, maxWidth } from "../../../../../app/styles/breakpoints";
import Container from "../../../../../app/styles/shared/Container";
import FlexWrapper from "../../../../../app/styles/shared/FlexWrapper";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { getCarWashTypeAliasById } from "../../../../../app/utils/carWashTypes";
import CarWashType from "../../../../../app/types/CarWash";
import Content from "../../../../../app/components/carWash/content";
import Reviews from "../../../../../app/components/carWash/reviews";
import Review from "../../../../../app/types/Review";
import countScoreFromReviews from "../../../../../app/utils/countScoreFromReviews";
import BreadcrumbsComponent from "../../../../../app/components/breadcrumbs/Breadcrumbs";

interface CarWashParams extends ParsedUrlQuery {
  carWash: string;
}

interface CarWashProps {
  carWashData: CarWashType;
  carWashReviews: Review[];
  carWashReviewsCount: number;
  carWashReviewsScore: number;
  isCarWashFetchDataError: boolean;
  isCarWashFetchReviewsError: boolean;
}

const ContentWrap = styled.div`
  width: 75%;
  padding-right: 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
    padding-right: 0;
  }
`;

const CarWash = (props: CarWashProps) => {
  const {
    carWashData,
    isCarWashFetchDataError,
    isCarWashFetchReviewsError,
    carWashReviews,
    carWashReviewsCount,
    carWashReviewsScore,
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
        <BreadcrumbsComponent />
        <Container>
          <FlexWrapper wrap={"wrap"}>
            <ContentWrap>
              <Content
                carWashData={carWashData}
                reviewsCount={carWashReviewsCount}
                reviewsScore={carWashReviewsScore}
                isCarWashFetchDataError={isCarWashFetchDataError}
              />
              <Reviews
                carWashData={carWashData}
                reviews={carWashReviews}
                reviewsCount={carWashReviewsCount}
                reviewsScore={carWashReviewsScore}
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
    carWashReviews: Review[] | null;
    carWashReviewsCount: number;
    carWashReviewsScore: number;
    isCarWashFetchReviewsError: boolean;
  }

  const props: Props = {
    carWashData: null,
    isCarWashFetchDataError: false,
    carWashReviews: null,
    carWashReviewsCount: 0,
    carWashReviewsScore: 0,
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
      `${process.env.NEXT_PUBLIC_HOST}/comments/car-wash:${props.carWashData.id}?blocked=false&_sort=created_at:DESC`
    );
    props.carWashReviews = carWashCommentsResponse.data;
    props.carWashReviewsCount = props.carWashReviews.length;
    props.carWashReviewsScore = countScoreFromReviews(props.carWashReviews);
  } catch (err) {
    props.isCarWashFetchReviewsError = true;
    console.log(err);
  }

  return {
    props: {
      carWashData: props.carWashData,
      carWashFetchDataError: props.isCarWashFetchDataError,
      carWashReviews: props.carWashReviews,
      carWashReviewsCount: props.carWashReviewsCount,
      carWashReviewsScore: props.carWashReviewsScore,
      carWashFetchReviewsError: props.isCarWashFetchReviewsError,
    },
    revalidate: 18000,
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
