import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";
import { colors } from "../../../../styles/variables";

const Name = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
  ${maxWidth(breakpoints.md)} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.carWashAddress};
  margin-top: 0;
  padding-left: 2rem;
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: 0 50%;
  background-image: url("/img/carWash/arrow-gray-right.svg");
  ${maxWidth(breakpoints.md)} {
    font-size: 14px;
    line-height: 18px;
    padding-left: 0;
    background-image: none;
  }
`;


export { Name, Address };
