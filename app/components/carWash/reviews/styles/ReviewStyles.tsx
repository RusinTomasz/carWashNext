import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";

const ReviewsWrap = styled.div`
  margin-top: 5rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    margin-bottom: 2rem;
  }
`;

const EmptyReviews = styled.p`
  font-size: 18px;
  text-align: center;
`;

export { ReviewsWrap, Title, EmptyReviews };
