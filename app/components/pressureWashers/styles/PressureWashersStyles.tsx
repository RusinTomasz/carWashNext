import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../styles/breakpoints";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import fonts from "../../../styles/shared/fonts";
import { colors } from "../../../styles/variables";

interface ShopLinkProps {
  backgroundColor?: "blue" | "red" | "green";
  color?: "white" | "default";
  zIndex?: number;
}

const SubTitle = styled.h2`
  margin: 5rem 0 1rem 0;
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    font-size: 21px;
    margin: 3rem 0 1rem 0;
  }
`;

const TopBar = styled(FlexWrapper)`
  align-items: center;
`;

const PressureWasher = styled.div`
  margin-top: 8rem;
  margin-bottom: 12rem;
  ${maxWidth(breakpoints.xl)} {
    margin-top: 3rem;
    margin-bottom: 8rem;
  }
  ${maxWidth(breakpoints.sm)} {
    margin-bottom: 5rem;
  }
`;

const TitleWrap = styled.div`
  position: relative;
  width: calc(100% - 520px);
  padding: 1.5rem 2.5rem;
  background-color: ${colors.blue};
  ${maxWidth(breakpoints.xl)} {
    width: 100%;
  }
  ${maxWidth(breakpoints.sm)} {
    display: flex;
    align-items: center;
  }
`;

const ScoreWrap = styled(FlexWrapper)`
  width: 520px;
  text-align: center;
  padding: 1rem 8rem;
  background-color: white;
  ${maxWidth(breakpoints.xl)} {
    width: 100%;
    padding: 0;
    margin-top: 3rem;
  }
`;

const Title = styled.h3`
  color: white;
  padding: 1rem 0 1rem 8rem;
  background-image: url("/img/svg/medal.svg");
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 5rem;
  ${maxWidth(breakpoints.sm)} {
    width: calc(100% - 65px);
    font-size: 18px;
    line-height: 24px;
    background: none;
    padding: 0;
  }
`;

const Position = styled.span`
  position: absolute;
  min-width: 22px;
  text-align: center;
  color: ${colors.default};
  top: 31px;
  left: 39px;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  ${maxWidth(breakpoints.sm)} {
    position: static;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-right: 1.5rem;
  }
`;

const ScoreLabel = styled.h4`
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 1.2rem;
  ${maxWidth(breakpoints.sm)} {
    font-size: 21px;
    line-height: 28px;
  }
`;

const Score = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  ${maxWidth(breakpoints.sm)} {
    font-size: 21px;
    line-height: 28px;
  }
`;

const ScoreValue = styled.span`
  color: ${colors.blue};
`;

const ScoreSuffix = styled.span``;

const ContentWrap = styled(FlexWrapper)`
  margin: 5rem 0;
  ${maxWidth(breakpoints.lg)} {
    margin: 3rem 0 0;
  }
`;

const ImageWrap = styled.div`
  width: 40%;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
    text-align: center;
  }
`;

const Content = styled.div`
  width: 60%;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
    margin-top: 2rem;
  }
`;

const InitialText = styled.p`
  margin-top: 5rem;
  ${maxWidth(breakpoints.xl)} {
    margin-top: 3rem;
  }
`;

const ProsConsWrap = styled(FlexWrapper)``;

const Pros = styled.div`
  width: 40%;
  ${maxWidth(breakpoints.md)} {
    width: calc(50% - 1rem);
    margin-right: 1rem;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
    margin: 0;
  }
`;

const Cons = styled.div`
  width: 60%;
  ${maxWidth(breakpoints.md)} {
    width: calc(50% - 1rem);
    margin-left: 1rem;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
    margin: 0;
  }
`;

const AlternativeTitle = styled.h5`
  margin: 2.5rem 0 1.5rem;
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;
  font-family: ${fonts.teko};
  text-transform: uppercase;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const styledListItem = styled.li`
  list-style: none;
  padding-left: 4rem;
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 0 50%;
  margin: 1rem 0;
`;

const FeatureListItem = styled(styledListItem)`
  background-image: url("/img/svg/gear.svg");
`;
const ProsListItem = styled(styledListItem)`
  background-image: url("/img/svg/plus.svg");
`;
const ConsListItem = styled(styledListItem)`
  background-image: url("/img/svg/minus.svg");
`;

const ShopsWrap = styled.div`
  margin: 6rem 0 0;
  ${maxWidth(breakpoints.sm)} {
    margin: 4rem 0 0;
  }
`;

const ShopTitle = styled.h4`
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 1.5rem;
  text-align: center;
`;

const ShopLink = styled.a<ShopLinkProps>`
  display: inline-block;
  margin: 2rem;
  padding: 0.5rem 6rem 0.2rem;
  font-size: 21px;
  line-height: 30px;
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
    padding: 0.5rem 3rem 0.2rem;
  }
  ${maxWidth(breakpoints.sm)} {
    margin: 1rem;
  }
`;

export {
  PressureWasher,
  SubTitle,
  TopBar,
  TitleWrap,
  ScoreWrap,
  Title,
  Position,
  ScoreLabel,
  Score,
  ScoreValue,
  ScoreSuffix,
  ContentWrap,
  ImageWrap,
  Content,
  InitialText,
  ProsConsWrap,
  Pros,
  Cons,
  AlternativeTitle,
  List,
  FeatureListItem,
  ProsListItem,
  ConsListItem,
  ShopsWrap,
  ShopLink,
  ShopTitle,
};
