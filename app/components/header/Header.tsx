import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Container from "../../styles/shared/Container";
import FlexWrapper from "../../styles/shared/FlexWrapper";

const HeaderContent = styled.header`
  background-color: ${colors.lightBlue};
  padding-right: 80px;
`;

const AddCarWashLink = styled.a`
  background-color: white;
  font-weight: 300;
  font-size: 24px;
  line-height: 20px;
  text-transform: uppercase;
  font-family: "Teko", sans-serif;
  border-radius: 3px;
  padding: 1rem 1.5rem 1rem;
  height: 42px;
  margin-left: 4rem;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContent>
      <Container>
        <FlexWrapper
          wrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <LogoLink>
              <Logo />
            </LogoLink>
          </Link>
          <Link href="/kontakt" passHref>
            <AddCarWashLink>+ Dodaj myjnię</AddCarWashLink>
          </Link>
        </FlexWrapper>
      </Container>
    </HeaderContent>
  );
};

export default Header;
