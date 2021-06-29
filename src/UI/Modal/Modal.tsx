import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

interface ModalProps {
  id: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ id, children, onClick }) => {
  let portal: Element | null = document.getElementById(id);

  const ContentModal: React.ReactNode = (
    <Fragment>
      <div className={classes.backdrop} onClick={onClick}></div>
      <div className={classes.modal}>{children}</div>
    </Fragment>
  );

  return createPortal(ContentModal, portal!);
};

export default Modal;
