import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../../styles/breakpoints";
import FlexWrapper from "../../../../../styles/shared/FlexWrapper";

const ReviewItem = styled.article`
  padding: 1.5rem 0;
`;

const ReviewFlexWrapper = styled(FlexWrapper)`
  ${maxWidth(breakpoints.md)} {
    justify-content: flex-start;
  }
`;

const TextContent = styled.div`
  width: calc(100% - 170px);
  padding-left: 1.5rem;
  ${maxWidth(breakpoints.md)} {
    justify-content: flex-start;
    width: 100%;
    padding-left: 0;
  }
`;

const AuthorName = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-right: 1rem;
`;

const ReviewMessage = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  margin-top: 0;
  ${maxWidth(breakpoints.md)} {
    margin-top: 1rem;
  }
`;

export {
  ReviewItem,
  ReviewFlexWrapper,
  AuthorName,
  ReviewMessage,
  TextContent,
};

// #review
// react-rater {
//     @include md {
//         display: flex;
//         margin-left: 0;
//         .react-rater-star {
//           line-height: 20px;
//           margin: 0;
//         }
//       }
// }
