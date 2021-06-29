import React from "react";
import Logo from "../logo/Logo";
import Image from "next/image";

// Styles
import styled from "styled-components";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import Container from "../../styles/shared/Container";
import { maxWidth, breakpoints } from "../../styles/breakpoints";

//Components
import FooterNavigation from "./footerNav/FooterNavigation";
import FooterCircle from "./footerCircle/FooterCircle";

const FooterShape = styled.div`
  min-height: 472px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FooterBackground = styled.div`
  position: relative;
  height: 700px;
  margin-bottom: -8rem;
  ${maxWidth(breakpoints.sm)} {
    height: 450px;
  }
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
        <FooterCircle />
        <FooterBottom>
          <FlexWrapper justifyContent="space-between" wrap="wrap">
            <FooterColumn>
              <FooterNavigation />
            </FooterColumn>
            <FooterColumn>
              <Logo />
              <FooterParagraph>
                Serwis rankingmyjni.pl to największy ranking myjni bezdotykowych
                oraz auto detailingu w Polsce. Zachęcamy do dodawania swoich
                doświadczeń w komentarzach. Razem stworzymy rzetelny portal,
                gdzie każdy zaczerpnie opinii przed potencjalną wizytą w salonie
                detailingu lub szybką wizytą na myjnii bezdotykowej.
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

          <p>CarWash © 2021 All Rights Reserved</p>
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
