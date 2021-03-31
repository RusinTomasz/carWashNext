import React from "react";
import Link from "next/link";

// Styles
import styled from "styled-components";
import { colors, fontFamilies } from "../../../styles/variables";
import { maxWidth, breakpoints } from "../../../styles/breakpoints";

const CircleLink = styled.a`
  background-color: ${colors.yellow};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;
  font-family: ${fontFamilies.teko};
  text-transform: uppercase;
  ${maxWidth(breakpoints.sm)} {
    width: 110px;
    height: 110px;
    font-size: 20px;
    line-height: 28px;
  }
`;

const CircleLinkWrap = styled.div`
  width: 100%;
  max-width: 80%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

const FooterTitle = styled.h3`
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
  color: white;
  text-align: center;
  max-width: 80%;
  position: relative;
  padding-top: 4rem;
  ${maxWidth(breakpoints.sm)} {
    font-size: 24px;
    line-height: 30px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 46%;
    transform: translateX(-50%);
    background-image: url("/img/footer/star.svg");
    transform: rotate(-90deg);
    background-repeat: no-repeat;
    background-size: 3rem;
    background-position: center;
    width: 3rem;
    height: 3rem;
  }
`;

const FooterCircleWrap = styled.div`
  position: absolute;
  top: -430px;
  left: 50%;
  transform: translateX(-50%);
  width: 490px;
  height: 490px;
  padding: 6rem;
  border-radius: 50%;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 5;
  ${maxWidth(breakpoints.sm)} {
    padding: 2rem;
    width: 280px;
    height: 280px;
    top: -340px;
  }
`;

function FooterCircle() {
  return (
    <FooterCircleWrap>
      <FooterTitle>Nie znalazłeś/łaś swojej myjni?</FooterTitle>
      <CircleLinkWrap>
        <Link href="/kontakt" passHref>
          <CircleLink>+ Dodaj myjnię</CircleLink>
        </Link>
      </CircleLinkWrap>
    </FooterCircleWrap>
  );
}

export default FooterCircle;
