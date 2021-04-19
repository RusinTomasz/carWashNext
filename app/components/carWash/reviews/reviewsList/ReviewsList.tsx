import Image from "next/image";
import React from "react";
import FlexWrapper from "../../../../styles/shared/FlexWrapper";
import StarsRater from "../../../starsRater/StarsRater";
import { EmptyReviews } from "../styles/ReviewStyles";
import ReviewRate from "../reviewRate/ReviewRate";

import {
  ReviewItem,
  ReviewFlexWrapper,
  AuthorName,
  ReviewMessage,
  TextContent,
} from "./styles/ReviewsListStyles";

interface ReviewsListProps {
  reviews: any;
}

const ReviewsList = (props: ReviewsListProps) => {
  const { reviews } = props;

  return (
    <>
      {reviews ? (
        reviews.map((review) => {
          return (
            <ReviewItem>
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
                    <AuthorName>Review Author</AuthorName>
                    <StarsRater total={5} rating={5} interactive={false} />
                  </FlexWrapper>
                  <ReviewMessage>Review message</ReviewMessage>
                </TextContent>
                {/* It should be removed below 768px */}
                <ReviewRate rate={5} />
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
