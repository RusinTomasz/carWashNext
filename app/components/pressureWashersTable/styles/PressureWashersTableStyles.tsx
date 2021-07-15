import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../styles/breakpoints";
import { colors } from "../../../styles/variables";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import fonts from "../../../styles/shared/fonts";

interface ShopLinkProps {
  backgroundColor?: "blue" | "red" | "green";
  color?: "white" | "default";
  zIndex?: number;
}

interface LinkWrapProps {
  textAlignSm?: "center" | "left" | "right";
}

const TableWrap = styled.div`
  margin-top: 5rem;
  padding: 2.5rem 5rem 5rem;
  background-color: ${colors.white};
  ${maxWidth(breakpoints.md)} {
    padding: 2.5rem 1.5rem 5rem;
  }
  ${maxWidth(breakpoints.sm)} {
    padding: 0;
    background-color: white;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    font-size: 21px;
  }
`;

const TitlePara = styled.p`
  margin: 0 0 2.5rem;
  text-align: center;
`;

const TableItem = styled(FlexWrapper)`
  background: white;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
  margin-top: 3rem;
  padding: 1.5rem 2rem;
  ${maxWidth(breakpoints.sm)} {
    padding: 1.5rem 0;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  padding: 0 1rem;
  ${maxWidth(breakpoints.lg)} {
    padding: 0 0.5rem;
  }
  ${maxWidth(breakpoints.md)} {
    width: 80px;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 60px;
  }
`;
const TitleWrap = styled.div`
  width: calc(46% - 100px);
  padding: 0 1rem;
  ${maxWidth(breakpoints.lg)} {
    padding: 0 0.5rem;
  }
  ${maxWidth(breakpoints.md)} {
    width: calc(46% - 80px);
  }
  ${maxWidth(breakpoints.sm)} {
    width: calc(52% - 60px);
  }
`;

const ScoreWrap = styled.div`
  text-align: center;
  width: 18%;
  padding: 0 1rem;
  ${maxWidth(breakpoints.lg)} {
    padding: 0 0.5rem;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 24%;
  }
`;

const ReviewWrap = styled.div`
  text-align: center;
  width: 18%;
  padding: 0 1rem;
  ${maxWidth(breakpoints.lg)} {
    padding: 0 0.5rem;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 24%;
  }
`;

const ShopLinksWrap = styled.div`
  width: 18%;
  padding: 0 1rem;
  ${maxWidth(breakpoints.lg)} {
    padding: 0 0.5rem;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
  }
  ${maxWidth(breakpoints.sm)} {
    display: flex;
    margin-top: 1rem;
  }
`;

const TitleLabel = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  ${maxWidth(breakpoints.xl)} {
    font-size: 16px;
    line-height: 21px;
  }
  ${maxWidth(breakpoints.md)} {
    font-size: 14px;
    line-height: 18px;
  }
`;
const Title = styled.h3`
  margin: 0.5rem 0 0;
  font-size: 20px;
  line-height: 27px;
  font-weight: 300;
  ${maxWidth(breakpoints.xl)} {
    font-size: 16px;
    line-height: 21px;
  }
  ${maxWidth(breakpoints.md)} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ScoreLabel = styled.span`
  display block;
  font-size: 16px;
  line-height: 21px;
  font-weight: 300;
  ${maxWidth(breakpoints.xl)} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Score = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height: 24px;
  margin-top: 0.5rem;
  ${maxWidth(breakpoints.xl)} {
    font-size: 16px;
    line-height: 21px;
  }
  ${maxWidth(breakpoints.md)} {
    font-size: 14px;
    line-height: 18px;
  }
`;
const ScoreValue = styled.span`
  color: ${colors.blue};
`;
const ScoreSuffix = styled.span``;

const ReviewButton = styled.button`
  display: inline-block;
  width: 94px;
  text-align: center;
  margin: 0.5rem;
  padding: 0.5rem 2rem 0.2rem;
  font-size: 14px;
  line-height: 20px;
  font-family: ${fonts.teko};
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-out;
  background-color: ${colors.blue};
  color: white;
  ${maxWidth(breakpoints.xl)} {
    padding: 0.5rem 1rem 0.2rem;
  }
  ${maxWidth(breakpoints.lg)} {
    width: 80px;
  }
  ${maxWidth(breakpoints.md)} {
    width: 70px;
    font-size: 13px;
    line-height: 18px;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 50px;
    padding: 0.5rem 0.5rem 0.2rem;
  }
`;

const LinkWrap = styled.div<LinkWrapProps>`
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    width: 33.33%;
    text-align: ${(props) =>
      props.textAlignSm ? props.textAlignSm : "center"};
  }
`;

const ShopLink = styled.a<ShopLinkProps>`
  display: inline-block;
  width: 94px;
  text-align: center;
  margin: 0.5rem;
  padding: 0.5rem 2rem 0.2rem;
  font-size: 14px;
  line-height: 20px;
  font-family: ${fonts.teko};
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-out;
  background-color: ${(props) =>
    props.backgroundColor ? colors[props.backgroundColor] : colors.blue};
  color: ${(props) => (props.color ? colors[props.color] : "white")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  ${maxWidth(breakpoints.xl)} {
    padding: 0.5rem 1rem 0.2rem;
  }
  ${maxWidth(breakpoints.lg)} {
    width: 80px;
  }
  ${maxWidth(breakpoints.md)} {
    width: 70px;
    font-size: 13px;
    line-height: 18px;
  }
`;

export {
  SubTitle,
  TableWrap,
  TitlePara,
  TableItem,
  ImageWrap,
  TitleWrap,
  ScoreWrap,
  ReviewWrap,
  ShopLinksWrap,
  TitleLabel,
  Title,
  ScoreLabel,
  Score,
  ScoreValue,
  ScoreSuffix,
  ReviewButton,
  LinkWrap,
  ShopLink,
};
