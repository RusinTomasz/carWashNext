import styled from "styled-components";
import Container from "../../../styles/shared/Container";
import FlexWrapper from "../../../styles/shared/FlexWrapper";

const BreadcrumbsWrap = styled(FlexWrapper)`
  position: relative;
  padding: 2rem 0;
`;

const BreadcrumbsContent = styled(Container)`
  z-index: 1;
`;

export { BreadcrumbsWrap, BreadcrumbsContent };
