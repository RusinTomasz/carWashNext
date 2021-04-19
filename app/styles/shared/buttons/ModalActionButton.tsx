import React from "react";
import BasicButton from "./BasicButton";

interface ModalActionButtonProps {
  text: string;
  openModal: () => void;
}

const ModalActionButton = (props: ModalActionButtonProps) => {
  const { openModal, text } = props;

  return (
    <BasicButton backgroundColor={"blue"} color={"white"} onClick={openModal}>
      {text}
    </BasicButton>
  );
};

export default ModalActionButton;
