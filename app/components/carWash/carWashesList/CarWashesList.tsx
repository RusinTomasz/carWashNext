import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarsRater from "../../starsRater/StarsRater";
import LoadingScreen from "../../loadingScreen/LoadingScreen";
import countScoreFromReviews from "../../../utils/countScoreFromReviews";
import { sortByNumberOfComments } from "../../../utils/carWashSortsMethods";
import CarWashType from "../../../types/CarWash";
import {
  ContentListWrap,
  Address,
  Wrap,
  ContentTopBar,
  TopBarText,
  Content,
  ImageWrap,
  Index,
} from "./styles/CarWashesListStyles";

interface CarWashesListProps {
  type: string;
  startingIndex: number;
  loading: boolean;
  carWashes: CarWashType[];
}

const CarWashesList = (props: CarWashesListProps) => {
  const { type, startingIndex, loading, carWashes } = props;

  return (
    <ContentListWrap>
      {loading && <LoadingScreen />}
      {carWashes.sort(sortByNumberOfComments).map((carWash, index) => {
        const score = countScoreFromReviews(carWash.comments);
        const imageSrc =
          type === "autodetailing"
            ? "/img/city/autospa-default.jpg"
            : "/img/city/bezdot-default.jpg";

        return (
          <article key={carWash.id}>
            <ContentTopBar wrap="wrap" alignItems="center">
              <TopBarText>{carWash.comments.length} Zaufanych ocen</TopBarText>
              <StarsRater total={5} rating={score} interactive={false} />
            </ContentTopBar>
            <Content alignItems="center">
              <ImageWrap>
                <Image src={imageSrc} layout="fill" className="radius-50" />
                <Index>{startingIndex + index + 1}</Index>
              </ImageWrap>
              <Wrap>
                <Link
                  href={`/${type}/${carWash.voivodeship_slug}/${carWash.city_slug}/${carWash.slug}`}
                >
                  {carWash.name}
                </Link>
                <div>
                  <Address>{carWash.full_address}</Address>
                </div>
              </Wrap>
            </Content>
          </article>
        );
      })}
    </ContentListWrap>
  );
};

export default CarWashesList;
