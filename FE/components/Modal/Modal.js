import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  ModalBackground,
  ModalContent,
  DeleteButton,
  Children,
} from "./ModalStyles";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <DeleteButton onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </DeleteButton>
        <Children>{children}</Children>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
