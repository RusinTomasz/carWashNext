import Image from "next/image";
import React from "react";
import FlexWrapper from "../../../../styles/shared/FlexWrapper";
import StarsRater from "../../../starsRater/StarsRater";
import { EmptyReviews } from "../styles/ReviewStyles";
import ReviewRate from "../reviewRate/ReviewRate";
import Review from "../../../../types/Review";

import {
  ReviewItem,
  ReviewFlexWrapper,
  AuthorName,
  ReviewMessage,
  TextContent,
} from "./styles/ReviewsListStyles";

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList = (props: ReviewsListProps) => {
  const { reviews } = props;

  return (
    <>
      {reviews ? (
        reviews.map((review) => {
          return (
            <ReviewItem key={review.id}>
              <ReviewFlexWrapper>
                {/* It should be removed below 768px */}
                <Image
                  src="/img/carWash/avatar-review.svg"
                  alt="awatar"
                  width={60}
                  height={60}
                />
                {/* end */}
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
                {/* It should be removed below 768px */}
                <ReviewRate rate={review.points ? review.points : 5} />
                {/* end */}
              </ReviewFlexWrapper>
            </ReviewItem>
          );
        })
      ) : (
        <EmptyReviews>Brak opinii</EmptyReviews>
      )}
    </>
  );
};

export default ReviewsList;
