import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";

// Styles
import styled, { css } from "styled-components";
import { colors, fontFamilies } from "../../styles/variables";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import Container from "../../styles/shared/Container";
import { maxWidth, breakpoints } from "../../styles/breakpoints";
import Image from "next/image";

const flexDisplay = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const FooterCircle = styled.div`
  position: absolute;
  top: -430px;
  left: 50%;
  transform: translateX(-50%);
  width: 490px;
  height: 490px;
  padding: 6rem;
  border-radius: 50%;
  background-color: ${colors.blue};
  ${flexDisplay};
  flex-wrap: wrap;
  z-index: 5;
  ${maxWidth(breakpoints.sm)} {
    padding: 2rem;
    width: 280px;
    height: 280px;
    top: -340px;
  }
`;

const FooterShape = styled.div`
  min-height: 472px;
  ${flexDisplay};
  position: relative;
`;

const FooterBackground = styled.div`
  position: relative;
  height: 700px;
  margin-bottom: -8rem;
  @include sm {
    height: 450px;
  }
`;

const FooterNavTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  text-transform: uppercase;
`;

const FooterNav = styled.ul`
  padding: 0;
`;
const FooterNavListItem = styled.li`
  padding: 0;
  list-style: none;
`;

const FooterLink = styled.a`
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin: 1rem 0;
`;

const FooterParagraph = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  text-align: justify;
`;

const FooterBottom = styled(Container)`
  padding-top: 8rem;
  color: white;
  z-index: 1;
`;

const FooterColumn = styled.div`
  width: 25%;
  ${maxWidth(breakpoints.md)} {
    width: 100%;
  }
`;

function Footer() {
  return (
    <footer>
      <FooterBackground>
        <Image
          className="bg-index"
          src="/img/footer/footer-bubble.jpg"
          alt="Bąbelki wodne"
          layout="fill"
          objectFit="cover"
        />
      </FooterBackground>
      <FooterShape>
        <FooterCircle>
          <FooterTitle>Nie znalazłeś/łaś swojej myjni?</FooterTitle>
          <CircleLinkWrap>
            <Link href="/kontakt" passHref>
              <CircleLink>+ Dodaj myjnię</CircleLink>
            </Link>
          </CircleLinkWrap>
        </FooterCircle>
        <FooterBottom>
          <FlexWrapper justifyContent="space-between" wrap="wrap">
            <FooterColumn>
              <FooterNavTitle>Linki</FooterNavTitle>
              <FooterNav>
                <FooterNavListItem>
                  <Link href="/kontakt" passHref>
                    <FooterLink>Dodaj myjnię</FooterLink>
                  </Link>
                </FooterNavListItem>
                <FooterNavListItem>
                  <Link href="/kontakt" passHref>
                    <FooterLink>Kontakt</FooterLink>
                  </Link>
                </FooterNavListItem>
                <FooterNavListItem>
                  <Link href="/policy" passHref>
                    <FooterLink>Polityka prywatności</FooterLink>
                  </Link>
                </FooterNavListItem>
                <FooterNavListItem>
                  <Link href="/cookies" passHref>
                    <FooterLink>Polityka cookies</FooterLink>
                  </Link>
                </FooterNavListItem>
              </FooterNav>
            </FooterColumn>
            <FooterColumn>
              <Logo />
              <FooterParagraph>
                Serwis rankingmyjni.pl to największy ranking myjni bezdotykowych
                oraz autospa w Polsce. Zachęcamy do dodawania swoich doświadczeń
                w komentarzach. Razem stworzymy rzetelny portal, gdzie każdy
                zaczerpnie opinii przed potencjalną wizytą w salonie detailingu
                lub szybką wizytą na myjnii bezdotykowej.
              </FooterParagraph>
            </FooterColumn>
            <FooterColumn>
              <FooterParagraph>
                Serwis rankingmyjni.pl bazuje na ogólnodostępnych informacjach w
                internecie. Jeżeli zauważyli Państwo treści niezgodne z prawdą
                lub chcieliby Państwo zedytować lub dodać dodatkowe informacje
                na temat swoich myjnii to zapraszamy do kontaktu.
              </FooterParagraph>
            </FooterColumn>
          </FlexWrapper>

          <p>CarWash © 2020 All Rights Reserved</p>
        </FooterBottom>
        <Image
          src="/img/footer/footer-shape.svg"
          alt="Niebieski background w kształcie trapezu"
          layout="fill"
          objectFit="cover"
        />
      </FooterShape>
    </footer>
  );
}

export default Footer;
