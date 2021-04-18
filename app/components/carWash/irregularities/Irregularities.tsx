import React from "react";
import IrregularitiesModal from "../../modals/irregularitiesModal/IrregularitiesModal";
import ModalActionButton from "../modalActionButton/ModalActionButton";

interface IrregularitiesProps {
  openModal: () => void;
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const Irregularities = (props: IrregularitiesProps) => {
  const { isModalOpen, openModal, handleCloseModal } = props;

  return (
    <>
      <ModalActionButton openModal={openModal} />
      <IrregularitiesModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Irregularities;
