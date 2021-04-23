import styled, { css } from "styled-components";
import { colors } from "../../../styles/variables";

interface OpenMenu {
  isOpen: boolean;
}

const barTransition = css`
  transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0.2s;
`;

const barStyle = css`
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
  background: #fff;
  transition: all 0.3s;
  transition-delay: 0s;
`;

const HamburgerNav = styled.nav<OpenMenu>`
  position: absolute;
  top: 9px;
  right: 9px;
  height: 42px;
  width: 42px;
  transition: all 0.5s ease-out, background 1s ease-out;
  transition-delay: 0.2s;
  z-index: 99;
  overflow: hidden;
  ${(props) =>
    props.isOpen &&
    `
    height: 100%;
    width: 250px;
    top: 0;
    transition: all 0.3s ease-in, background 0.5s ease-in;
    transition-delay: 50ms;
    background-color: #fff;
    right: 0;
    z-index: 99;
  `}
`;

const Hamburger = styled.div`
  position: absolute;
  display: inline-block;
  height: 42px;
  width: 42px;
  cursor: pointer;
  user-select: none;
  background-color: ${colors.lightBlue};
  z-index: 99;
  right: 0;
`;

const BurgerInner = styled.div`
  width: 18px;
  height: 8px;
  position: relative;
  display: block;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
`;

const Topbar = styled.span<OpenMenu>`
  ${barStyle}
  transform: translateY(0) rotate(0);
  ${(props) =>
    props.isOpen &&
    `
  ${barTransition}  
  transform: translateY(4px) rotate(135deg);
  `}
`;

const BtmBar = styled.span<OpenMenu>`
  ${barStyle}
  transform: translateY(6px) rotate(0);
  ${(props) =>
    props.isOpen &&
    `
  ${barTransition}
  transform: translateY(3px) rotate(-135deg);
  `}
`;

const Menu = styled.ul`
  position: relative;
  display: block;
  padding: 0 1.5rem;
  list-style: none;
  font-size: 26px;
  margin: 5rem 0 0;
`;

const MenuItem = styled.li<OpenMenu>`
  margin-top: 5px;
  transform: scale(1.15) translateY(-30px);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  ${(props) =>
    props.isOpen &&
    `
        transform: scale(1) translateY(0);
        opacity: 1;
      `}
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 18px;
  line-height: 2.35;
  width: 100%;
  transition: all 0.4s;
  border-bottom: 1px solid ${colors.lightBlue};
`;

export {
  Hamburger,
  BurgerInner,
  Topbar,
  BtmBar,
  HamburgerNav,
  Menu,
  MenuItem,
  MenuLink,
};
