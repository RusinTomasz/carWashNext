import React, { useContext } from "react";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import dynamic from "next/dynamic";
import Ratings from "../ratings/Ratings";
import OpenHours from "../../openHours/OpenHours";
import PhoneNumber from "../phoneNumber/PhoneNumber";
import { LeftSideWrap, RightSideWrap } from "./styles/ContentStyles";
import CarWashType from "../../../types/CarWash";
import Header from "../header/Header";
import Irregularities from "../irregularities/Irregularities";
import { AppContext } from "../../../context/AppContext";
import RatingsMobile from "../ratings/RatingsMobile";
import MapPlaceholder from "../../locationMap/MapPlaceholder";
import LoadingSpinner from "../../loaders/LoadingSpinner";

const Map = dynamic(import("../../locationMap/LocationMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "300px",
        position: "relative",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3rem",
      }}
    >
      <LoadingSpinner size={120} borderSize={5} />
    </div>
  ),
});

interface ContentContainerProps {
  carWashData: CarWashType;
  isModalOpen: boolean;
  reviewsCount: number;
  reviewsScore: number;
  isMapPlaceholder: boolean;
  handleCloseModal: () => void;
  openModal: () => void;
  showMap: () => void;
}

const Content = (props: ContentContainerProps) => {
  const {
    carWashData,
    reviewsCount,
    reviewsScore,
    isMapPlaceholder,
    isModalOpen,
    handleCloseModal,
    openModal,
    showMap,
  } = props;
  const { windowWidth } = useContext(AppContext);

  return (
    <article>
      <FlexWrapper wrap="wrap">
        <LeftSideWrap>
          {windowWidth >= 768 && (
            <Ratings reviewsCount={reviewsCount} reviewsScore={reviewsScore} />
          )}

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
          {windowWidth < 768 && (
            <RatingsMobile
              reviewsCount={reviewsCount}
              reviewsScore={reviewsScore}
            />
          )}
          <Header
            name={carWashData.name}
            fullAddress={carWashData.full_address}
            reviewsScore={reviewsScore}
          />
          {isMapPlaceholder ? (
            <MapPlaceholder showMap={showMap} />
          ) : (
            <Map
              position={[carWashData.lat, carWashData.lng]}
              popupTitle={carWashData.name}
            />
          )}
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
