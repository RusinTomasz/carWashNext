import Image from "next/image";
import React, { useContext } from "react";
import FlexWrapper from "../../../../styles/shared/FlexWrapper";
import StarsRater from "../../../starsRater/StarsRater";
import ReviewRate from "../reviewRate/ReviewRate";
import Review from "../../../../types/Review";

import {
  ReviewItem,
  ReviewFlexWrapper,
  AuthorName,
  ReviewMessage,
  TextContent,
} from "./styles/ReviewsListStyles";
import { AppContext } from "../../../../context/AppContext";

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList = (props: ReviewsListProps) => {
  const { reviews } = props;
  const { windowWidth } = useContext(AppContext);

  return (
    <>
      {reviews.map((review) => {
        return (
          <ReviewItem key={review.id}>
            <ReviewFlexWrapper>
              {windowWidth >= 768 && (
                <Image
                  src="/img/carWash/avatar-review.svg"
                  alt="awatar"
                  width={60}
                  height={60}
                />
              )}
              <TextContent>
                <FlexWrapper alignItems="center" wrap="wrap">
                  <AuthorName>{review.authorName}</AuthorName>
                  <StarsRater
                    starsLinkColor={"#e5e5e5"}
                    total={5}
                    rating={review.points ? review.points : 5}
                    interactive={false}
                  />
                </FlexWrapper>
                <ReviewMessage>{review.content}</ReviewMessage>
              </TextContent>
              {windowWidth >= 768 && (
                <ReviewRate rate={review.points ? review.points : 5} />
              )}
            </ReviewFlexWrapper>
          </ReviewItem>
        );
      })}
    </>
  );
};

export default ReviewsList;
