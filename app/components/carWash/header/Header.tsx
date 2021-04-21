import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import HeaderRatingMobile from "../ratings/HeaderRatingMobile";
import { HeaderWrap, Name, Address } from "./styles/HeaderStyles";

interface HeaderProps {
  name: string;
  fullAddress: string;
  reviewsScore: number;
}

const Header = (props: HeaderProps) => {
  const { name, fullAddress, reviewsScore } = props;
  const { windowWidth } = useContext(AppContext);

  return (
    <FlexWrapper wrap={"wrap"}>
      {windowWidth < 768 && <HeaderRatingMobile reviewsScore={reviewsScore} />}
      <HeaderWrap>
        <Name>{name}</Name>
        <Address>{fullAddress}</Address>
      </HeaderWrap>
    </FlexWrapper>
  );
};

export default Header;
