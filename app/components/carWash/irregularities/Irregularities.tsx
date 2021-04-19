import React from "react";
import IrregularitiesModal from "../../modals/irregularitiesModal/IrregularitiesModal";
import ModalActionButton from "../../../styles/shared/buttons/ModalActionButton";
import { ButtonFormWrap } from "./styles/IrregularitiesStyles";

interface IrregularitiesProps {
  openModal: () => void;
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const Irregularities = (props: IrregularitiesProps) => {
  const { isModalOpen, openModal, handleCloseModal } = props;

  return (
    <>
      <ButtonFormWrap>
        <ModalActionButton
          text={"Zgłoś nieprawidłowości w opisie"}
          openModal={openModal}
        />
      </ButtonFormWrap>
      <IrregularitiesModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Irregularities;
