import React from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import dynamic from "next/dynamic";
import Ratings from "../ratings/Ratings";
import OpenHours from "../../openHours/OpenHours";
import BasicButton from "../../../styles/shared/buttons/BasicButton";
import IrregularitiesModal from "../../modals/irregularitiesModal/IrregularitiesModal";
import {
  LeftSideWrap,
  RightSideWrap,
  Name,
  Address,
  ButtonFormWrap,
  PhoneWrap,
  PhoneNumber,
} from "./styles/ContentStyles";
import CarWashType from "../../../types/CarWash";

const Map = dynamic(import("../../locationMap/LocationMap"), {
  ssr: false,
  loading: () => (
    <div style={{ textAlign: "center", paddingTop: 20 }}>Loading…</div>
  ),
});

interface ContentContainerProps {
  carWashData: CarWashType;
  handleCloseModal: () => void;
  openModal: () => void;
  isModalOpen: boolean;
}

const Content = (props: ContentContainerProps) => {
  const { carWashData, handleCloseModal, openModal, isModalOpen } = props;

  return (
    <>
      <article>
        <FlexWrapper>
          <LeftSideWrap>
            {/* It should be removed below 768px */}
            <Ratings />
            {/* end */}
            <PhoneWrap>
              <PhoneNumber href={`tel:${carWashData.phone}`}>
                {carWashData.phone}
              </PhoneNumber>
            </PhoneWrap>
            <OpenHours
              monday={carWashData.monday_open_hours}
              tuesday={carWashData.tuesday_open_hours}
              wednesday={carWashData.wednesday_open_hours}
              thursday={carWashData.thursday_open_hours}
              friday={carWashData.friday_open_hours}
              saturday={carWashData.saturday_open_hours}
              sunday={carWashData.sunday_open_hours}
            />
          </LeftSideWrap>
          <RightSideWrap>
            <FlexWrapper wrap={"wrap"}>
              <div>
                <Name>{carWashData.name}</Name>
                <Address>{carWashData.full_address}</Address>
              </div>
            </FlexWrapper>
            <Map
              position={[carWashData.lat, carWashData.lng]}
              popupTitle={carWashData.name}
            />
            <ButtonFormWrap>
              <BasicButton
                backgroundColor={"blue"}
                color={"white"}
                onClick={openModal}
              >
                Zgłoś nieprawidłowości w opisie
              </BasicButton>
            </ButtonFormWrap>
          </RightSideWrap>
        </FlexWrapper>
      </article>
      <IrregularitiesModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Content;
