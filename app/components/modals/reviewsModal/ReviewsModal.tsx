import React from "react";
import { BasicModal, CloseButton } from "../styles/GlobalModalsStyles";
import { Title } from "./styles/ReviewsModalStyles";

const ReviewsModal = (props) => {
  const { isModalOpen, onClose } = props;

  return (
    <BasicModal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="Irregularities Modal"
      ariaHideApp={false}
    >
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>NAZWA MYJNI:</Title>
      <p>Całkowita ocena: 5,0 (99 opnii) </p>
      <p>Gwiazdki</p>
    </BasicModal>
  );
};

export default ReviewsModal;
