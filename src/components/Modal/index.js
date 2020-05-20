import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import { ButtonModal, HeaderModal } from './styles'

const ModalCart = (props) => {
  const {
    buttonLabel,
    desconto,
    className,
    bgColor
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ButtonModal bgColor={bgColor} onClick={toggle}>{buttonLabel}</ButtonModal>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <HeaderModal toggle={toggle} />
        <ModalBody className="text-center">
          <h3 className="mb-5">Obrigado</h3>
          <p>Você ganhou de volta R$ {desconto}</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalCart;