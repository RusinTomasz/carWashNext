import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";

const PromotedItem = styled.article`
  width: 33.33%;
  padding: 0 1.5rem;
  ${maxWidth(breakpoints.lg)} {
    width: 50%;
  }
  ${maxWidth(breakpoints.md)} {
    width: 100%;
  }
`;

const PromotedItemContent = styled.div`
  padding: 1.5rem 0 4rem;
  background-color: #f9f9f9;
  border-radius: 3px;
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const Name = styled.h3`
  padding: 0 1.5rem;
  min-height: 100px;
  display: flex;
  align-items: center;
  line-height: 32px;
  ${maxWidth(breakpoints.lg)} {
    font-size: 24px;
  }
`;

const CityWrap = styled.div`
  padding: 0 1.5rem;
`;

const City = styled.p`
  padding: 1rem 1.5rem 1rem 5.5rem;
  background-image: url("/img/promoted/promoted-icon.svg");
  background-position: 0 50%;
  background-size: 4rem;
  background-repeat: no-repeat;
  font-weight: 500;
`;

const PromotedImageWrap = styled.div`
  position: relative;
  height: 240px;
`;

const ActionLinkWrap = styled.div`
  text-align: center;
`;

export {
  PromotedItem,
  PromotedItemContent,
  Name,
  CityWrap,
  City,
  PromotedImageWrap,
  ActionLinkWrap,
};
