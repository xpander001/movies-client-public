import React, { useState, useContext } from 'react';
import Button from 'components/button';
import ModalContext from 'context/modal-context';
import './modal.css';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
};

const ModalContent = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(ModalContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="modal modal--open">
      <div className="modal__overlay"></div>
      <div className="modal__content border">
        <div className="d-flex flex-row-reverse">
          <Button size="small" primary onClick={closeModal}>
            close
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

const ModalButton = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return React.cloneElement(children, {
    onClick: () => {
      setIsOpen(true);
      if (children.props.onClick) {
        children.props.onClick();
      }
    },
  });
};

export { Modal, ModalContent, ModalButton };
