import styled from "styled-components";
import { colors } from "../../../styles/variables";
import Modal from "react-modal";

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

const BasicModal = styled(Modal)`
  position: absolute;
  outline: none;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background: rgb(116, 161, 255);
  padding: 20px 15px 25px 15px;
  overflow: hidden;
`;

export { CloseButton, BasicModal };
