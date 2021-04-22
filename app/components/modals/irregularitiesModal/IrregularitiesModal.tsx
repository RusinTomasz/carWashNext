import React from "react";
import IrregularitiesForm from "../../forms/irregularitiesForm";
import { CloseButton, BasicModal } from "../styles/GlobalModalsStyles";
import { Title } from "./styles/IrregularitiesModalStyles";

interface IrregularitiesModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const IrregularitiesModal = (props: IrregularitiesModalProps) => {
  const { isModalOpen, onClose } = props;

  return (
    <BasicModal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="Irregularities Modal"
      ariaHideApp={false}
    >
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>Formularz zgłoszeniowy</Title>
      <IrregularitiesForm />
    </BasicModal>
  );
};

export default IrregularitiesModal;
