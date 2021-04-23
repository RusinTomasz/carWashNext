import Link from "next/link";
import React, { useState } from "react";
import {
  Hamburger,
  BurgerInner,
  Topbar,
  BtmBar,
  HamburgerNav,
  Menu,
  MenuItem,
  MenuLink,
} from "./styles/MainMenuStyles";

const MainMenu = () => {
  const [isOpen, setMenuIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setMenuIsOpen(false);
  };

  return (
    <HamburgerNav role="navigation" isOpen={isOpen}>
      <Hamburger onClick={handleHamburgerClick}>
        <BurgerInner>
          <Topbar isOpen={isOpen} />
          <BtmBar isOpen={isOpen} />
        </BurgerInner>
      </Hamburger>
      <Menu>
        <MenuItem isOpen={isOpen}>
          <Link href="/" passHref>
            <MenuLink onClick={handleLinkClick}>Strona główna</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/wyszukwiarka" passHref>
            <MenuLink onClick={handleLinkClick}>Wyszukiwarka</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/kontakt" passHref>
            <MenuLink onClick={handleLinkClick}>Kontakt</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/kontakt" passHref>
            <MenuLink onClick={handleLinkClick}>Regulamin</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/kontakt" passHref>
            <MenuLink onClick={handleLinkClick}>Polityka prywatności</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/kontakt" passHref>
            <MenuLink onClick={handleLinkClick}>Cookies</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <Link href="/kontakt" passHref>
            <MenuLink onClick={handleLinkClick}>RODO</MenuLink>
          </Link>
        </MenuItem>
      </Menu>
    </HamburgerNav>
  );
};

export default MainMenu;
