import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { colors } from "../../../styles/variables";
import IrregularitiesForm from "../../forms/irregularitiesForm/IrregularitiesForm";

const StyledIrregularitiesModal = styled(Modal)`
  position: absolute;
  outline: none;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: rgb(116, 161, 255);
  padding: 20px 15px 25px 15px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  box-shadow: none;
  color: white;
  background-color: ${colors.red};
  cursor: pointer;
  border-radius: 0 4px 0 0;
  padding: 0.5rem 1rem;
`;

const Title = styled.h2`
  color: white;
`;

const IrregularitiesModal = (props) => {
  const { isModalOpen, onClose } = props;

  return (
    <StyledIrregularitiesModal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="Irregularities Modal"
      ariaHideApp={false}
    >
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>Formularz zgłoszeniowy</Title>
      <IrregularitiesForm />
    </StyledIrregularitiesModal>
  );
};

export default IrregularitiesModal;
