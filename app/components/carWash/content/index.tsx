import React, { useState } from "react";
import CarWashType from "../../../types/CarWash";
import ErrorCarWashContentUI from "../../errors/ErrorCarWashContentUI";
import Content from "./Content";

interface ContentContainerProps {
  carWashData: CarWashType;
  isCarWashFetchDataError: boolean;
  reviewsCount: number;
  reviewsScore: number;
}

const ContentContainer = (props: ContentContainerProps) => {
  const {
    carWashData,
    isCarWashFetchDataError,
    reviewsCount,
    reviewsScore,
  } = props;

  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {!isCarWashFetchDataError ? (
        <Content
          handleCloseModal={handleCloseModal}
          openModal={openModal}
          carWashData={carWashData}
          reviewsCount={reviewsCount}
          reviewsScore={reviewsScore}
          isModalOpen={isModalOpen}
        />
      ) : (
        <ErrorCarWashContentUI />
      )}
    </>
  );
};

export default ContentContainer;
