import React, { useContext } from "react";
import Image from "next/image";

import PromotedItems from "./promotedItems/PromotedItems";
import {
  PromotedTitle,
  ContentWrap,
  PromotedContainer,
  PromotedFlexWrapper,
} from "./styles/PromotedStyles";
import CarWashType from "../../types/CarWash";
import { AppContext } from "../../context/AppContext";

interface PromotedProps {
  promotedCarWashes: CarWashType[];
}

const Promoted = (props: PromotedProps) => {
  const { promotedCarWashes } = props;
  const { windowWidth } = useContext(AppContext);

  let containerHeight = 1620;

  if (windowWidth > 991) {
    containerHeight = 680;
  } else if (windowWidth > 767 && windowWidth <= 991) {
    containerHeight = 1100;
  }

  return (
    <section>
      <PromotedTitle>Wyróżnione myjnie</PromotedTitle>
      <ContentWrap containerHeight={containerHeight}>
        <PromotedContainer z-index={1}>
          <PromotedFlexWrapper wrap="wrap" alignItems="center">
            <PromotedItems promotedCarWashes={promotedCarWashes} />
          </PromotedFlexWrapper>
        </PromotedContainer>
        <Image
          className="bg-index"
          src="/img/promoted/carwash-promoted-bg.jpg"
          alt="Tło sekcji z żóltego Lamborghini"
          layout="fill"
          objectFit="cover"
        />
      </ContentWrap>
    </section>
  );
};

export default Promoted;
