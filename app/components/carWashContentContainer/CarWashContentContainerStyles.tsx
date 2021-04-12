import styled from "styled-components";
import { breakpoints, maxWidth } from "../../styles/breakpoints";
import { colors } from "../../styles/variables";

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

const ButtonFormWrap = styled.div`
  text-align: right;
`;

const PhoneWrap = styled.div`
  margin-top: 2rem;
`;

const PhoneNumber = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: ${colors.lightBlue};
  padding-left: 3rem;
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 0 50%;
  background-image: url("/img/carWash/phone-blue-icon.svg");
`;

export {
  LeftSideWrap,
  RightSideWrap,
  Name,
  Address,
  ButtonFormWrap,
  PhoneWrap,
  PhoneNumber,
};
