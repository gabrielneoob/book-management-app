import { ReactNode, useState } from 'react';
import * as S from './styles'

const Modal = ({ isOpen, onClose, children }: {isOpen: boolean, onClose: any, children: ReactNode}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <S.ModalOverlay>
          <S.ModalContent className="modal-content">
            <S.CloseBtn className="close-btn" onClick={handleClose}>
              &times;
            </S.CloseBtn>
            {children}
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default Modal;