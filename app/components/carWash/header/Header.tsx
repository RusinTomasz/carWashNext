import React from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import { Name, Address } from "./styles/HeaderStyles";

interface HeaderProps {
  name: string;
  fullAddress: string;
}

const Header = (props: HeaderProps) => {
  const { name, fullAddress } = props;

  return (
    <FlexWrapper wrap={"wrap"}>
      <div>
        <Name>{name}</Name>
        <Address>{fullAddress}</Address>
      </div>
    </FlexWrapper>
  );
};

export default Header;
