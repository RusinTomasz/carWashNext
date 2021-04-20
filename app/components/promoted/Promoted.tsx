import React from "react";
import Image from "next/image";

import PromotedItems from "./promotedItems/PromotedItems";
import {
  PromotedTitle,
  ContentWrap,
  PromotedContainer,
  PromotedFlexWrapper,
} from "./styles/PromotedStyles";
import CarWashType from "../../types/CarWash";

interface PromotedProps {
  promotedCarWashes: CarWashType[];
}

const Promoted = (props: PromotedProps) => {
  const { promotedCarWashes } = props;
  //#review
  //Must be implemented
  //   let containerHeight;
  //   if (props.windowWidth > 991) {
  //     containerHeight = 680;
  //   } else if (props.windowWidth > 767 && props.windowWidth <= 991) {
  //     containerHeight = 1100;
  //   } else {
  //     containerHeight = 1620;
  //   }

  return (
    <section>
      <PromotedTitle>Wyróżnione myjnie</PromotedTitle>
      <ContentWrap>
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
