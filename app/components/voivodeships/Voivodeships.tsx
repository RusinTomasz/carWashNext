import React, { useState } from "react";
import Image from "next/image";

//Styles
import styled from "styled-components";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import Container from "../../styles/shared/Container";
import BasicButton from "../../styles/shared/buttons/BasicButton";
import { maxWidth, breakpoints } from "../../styles/breakpoints";

//Utils
import carWashTypes from "../../utils/carWashTypes";

//Components

const VoivodeshipsWrap = styled(Container)`
  margin-top: 6rem;

  ${maxWidth(breakpoints.sm)} {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const ButtonsWrap = styled.div`
  margin: 3rem 0;
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    margin: 1rem 0;
  }
`;

const TypeButton = styled(BasicButton)`
  margin: 0 1rem;
`;

const Voivodeships = () => {
  const [type, setType] = useState(carWashTypes.autospa);

  return (
    <VoivodeshipsWrap>
      <Title>Województwa</Title>
      <ButtonsWrap>
        <TypeButton
          color={type === carWashTypes.autospa ? "white" : "default"}
          backgroundColor={
            type === carWashTypes.autospa ? "blue" : "grayButton"
          }
          onClick={() => setType(carWashTypes.autospa)}
        >
          Auto Spa
        </TypeButton>
        <TypeButton
          color={type === carWashTypes.touchless ? "white" : "default"}
          backgroundColor={
            type === carWashTypes.touchless ? "blue" : "grayButton"
          }
          onClick={() => setType(carWashTypes.touchless)}
        >
          Myjnie bezdotykowe
        </TypeButton>
      </ButtonsWrap>
    </VoivodeshipsWrap>
  );
};

export default Voivodeships;
