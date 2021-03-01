import React, { useCallback, useContext, useEffect } from 'react';
import classnames from 'classnames';
import Button from 'components/button';
import './modal.css';

const ESCAPE_KEY = 27;

const ModalContext = React.createContext();

const Modal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
};

const ModalButton = ({ children }) => {
  const [, setIsOpen] = useContext(ModalContext);
  return React.cloneElement(children, {
    onClick: () => {
      setIsOpen(true);
      if (children.props.onClick) {
        children.props.onClick();
      }
    },
  });
};

const ModalContent = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  const modalClass = classnames({
    modal: true,
    'modal--open': isOpen,
  });

  const onKeyPress = useCallback(
    (e) => {
      if (e.keyCode === ESCAPE_KEY) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    window.document.addEventListener('keydown', onKeyPress);
    return () => {
      window.document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={modalClass}>
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
  );
};

export { Modal, ModalButton, ModalContent };
