import React from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import dynamic from "next/dynamic";
import Ratings from "../ratings/Ratings";
import OpenHours from "../../openHours/OpenHours";
import PhoneNumber from "../phoneNumber/PhoneNumber";
import { LeftSideWrap, RightSideWrap } from "./styles/ContentStyles";
import CarWashType from "../../../types/CarWash";
import Header from "../header/Header";
import Irregularities from "../irregularities/Irregularities";

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
    <article>
      <FlexWrapper>
        <LeftSideWrap>
          {/* It should be removed below 768px */}
          <Ratings />
          {/* end */}
          <PhoneNumber phoneNumber={carWashData.phone} />
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
          <Header
            name={carWashData.name}
            fullAddress={carWashData.full_address}
          />
          <Map
            position={[carWashData.lat, carWashData.lng]}
            popupTitle={carWashData.name}
          />
          <Irregularities
            openModal={openModal}
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
          />
        </RightSideWrap>
      </FlexWrapper>
    </article>
  );
};

export default Content;
