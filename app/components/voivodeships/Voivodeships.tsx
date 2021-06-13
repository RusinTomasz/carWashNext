import React, { useState } from "react";
import carWashTypes from "../../utils/carWashTypes";

import VoivodeshipsList from "./voivodeshipsList/VoivodeshipsList";
import voivodeships from "./data/voivodeshipsData";

import {
  VoivodeshipsWrap,
  Title,
  ButtonsWrap,
  TypeButton,
} from "./styles/VoivodeshipsStyles";

const Voivodeships = () => {
  const [type, setType] = useState(carWashTypes.autodetailing);

  return (
    <VoivodeshipsWrap>
      <Title>Województwa</Title>
      <ButtonsWrap>
        <TypeButton
          color={type === carWashTypes.autodetailing ? "white" : "default"}
          backgroundColor={
            type === carWashTypes.autodetailing ? "blue" : "grayButton"
          }
          onClick={() => setType(carWashTypes.autodetailing)}
        >
          Auto Detailing
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
      <VoivodeshipsList type={type.alias} voivodeships={voivodeships} />
    </VoivodeshipsWrap>
  );
};

export default Voivodeships;
