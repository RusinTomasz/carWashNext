import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../styles/breakpoints";
import FlexWrapper from "../../../styles/shared/FlexWrapper";

const MapPlaceholderWrap = styled(FlexWrapper)`
  position: relative;
  height: 300px;
  margin: 5rem 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  ${maxWidth(breakpoints.md)} {
    margin: 1rem 0 3rem;
  }
`;

export { MapPlaceholderWrap };
