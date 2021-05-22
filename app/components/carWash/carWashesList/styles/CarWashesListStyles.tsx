import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";
import FlexWrapper from "../../../../styles/shared/FlexWrapper";
import { colors } from "../../../../styles/variables";

const ContentListWrap = styled.div`
  position: relative;
`;

const Address = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.grayText};
  margin-top: 0.5rem;
  padding-left: 2.5rem;
  position: relative;
  ${maxWidth(breakpoints.sm)} {
    padding-left: 0;
    font-size: 14px;
    line-height: 18px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 2rem;
    height: 2rem;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: center;
    background-image: url("/img/city/arrow-gray-right.svg");
    ${maxWidth(breakpoints.sm)} {
      display: none;
    }
  }
`;

const Wrap = styled.div`
  width: calc(100% - 110px);
  margin-left: 3rem;
  ${maxWidth(breakpoints.sm)} {
    width: calc(100% - 90px);
    margin-left: 2rem;
  }
`;

const ContentTopBar = styled(FlexWrapper)`
  background-color: ${colors.barBlue};
  color: white;
  padding: 0 2rem;
  ${maxWidth(breakpoints.sm)} {
    padding: 0 1.5rem;
  }
`;

const TopBarText = styled.p`
  margin: 0 2rem 0 9rem;
  ${maxWidth(breakpoints.sm)} {
    margin: 0 0.85rem 0 0;
  }
`;

const Content = styled(FlexWrapper)`
  padding: 2rem 1rem;
`;

const ImageWrap = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  ${maxWidth(breakpoints.sm)} {
    width: 70px;
  }
`;

const Index = styled.span`
  position: absolute;
  bottom: -0.3rem;
  right: -0.7rem;
  width: 35px;
  height: 35px;
  background-color: ${colors.yellow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

export {
  ContentListWrap,
  Address,
  Wrap,
  ContentTopBar,
  TopBarText,
  Content,
  ImageWrap,
  Index,
};
