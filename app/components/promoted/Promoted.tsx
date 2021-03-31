import React from "react";
import Image from "next/image";

//Styles
import styled from "styled-components";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import Container from "../../styles/shared/Container";

interface ContentWrapProps {
  containerHeight?: number;
}

const PromotedTitle = styled.h2`
  padding: 6rem 1.5rem 3rem;
  background-image: url("/img/promoted/star.svg");
  background-position: 50% 1rem;
  background-size: 4rem;
  background-repeat: no-repeat;
  text-align: center;
`;

const ContentWrap = styled.div<ContentWrapProps>`
  position: relative;
  height: ${(props) => (props.containerHeight ? props.containerHeight : 680)}px;
`;

const PromotedContainer = styled(Container)`
  height: 100%;
`;

const PromotedFlexWrapper = styled(FlexWrapper)`
  height: 100%;
`;

function Promoted() {
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
            <h1>First Element</h1>
            <h1>Second Element</h1>
            <h1>Third Element</h1>
            {/* <PromotedItems /> */}
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
}

export default Promoted;
