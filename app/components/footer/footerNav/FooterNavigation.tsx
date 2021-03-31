import React from "react";
import Link from "next/link";

// Styles
import styled from "styled-components";

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

function FooterNavigation() {
  return (
    <>
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
    </>
  );
}

export default FooterNavigation;
