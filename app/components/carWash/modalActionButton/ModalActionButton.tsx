import React from "react";
import BasicButton from "../../../styles/shared/buttons/BasicButton";
import { ButtonFormWrap } from "./styles/ModalActionButtonStyles";

interface ModalActionButtonProps {
  openModal: () => void;
}

const ModalActionButton = (props: ModalActionButtonProps) => {
  const { openModal } = props;

  return (
    <ButtonFormWrap>
      <BasicButton backgroundColor={"blue"} color={"white"} onClick={openModal}>
        Zgłoś nieprawidłowości w opisie
      </BasicButton>
    </ButtonFormWrap>
  );
};

export default ModalActionButton;
