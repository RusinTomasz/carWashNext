import styled from "styled-components";
import Container from "../../../styles/shared/Container";
import FlexWrapper from "../../../styles/shared/FlexWrapper";

interface ContentWrapProps {
  containerHeight?: number;
}

const PromotedTitle = styled.h2`
  padding: 6rem 1.5rem 3rem;
  background-image: url("/img/promoted/star.svg");
  background-position: 50% 1rem;
  background-size: 4rem;
  background-repeat: no-repeat;
  text-align: center;
`;

const ContentWrap = styled.div<ContentWrapProps>`
  position: relative;
  height: ${(props) => (props.containerHeight ? props.containerHeight : 680)}px;
`;

const PromotedContainer = styled(Container)`
  height: 100%;
`;

const PromotedFlexWrapper = styled(FlexWrapper)`
  height: 100%;
`;

export { PromotedTitle, ContentWrap, PromotedContainer, PromotedFlexWrapper };
