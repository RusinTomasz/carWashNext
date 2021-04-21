import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";

const LeftSideWrap = styled.div`
  width: 33.33%;
  position: relative;

  ${maxWidth(breakpoints.lg)} {
    width: 41.66%;
  }
  ${maxWidth(breakpoints.md)} {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const RightSideWrap = styled.div`
  width: 66.66%;

  ${maxWidth(breakpoints.lg)} {
    width: 58.33%;
  }
  ${maxWidth(breakpoints.md)} {
    width: 100%;
    margin-top: 4rem;
    order: -1;
  }
`;




export {
  LeftSideWrap,
  RightSideWrap,

};
