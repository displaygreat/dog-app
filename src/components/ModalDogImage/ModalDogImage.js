import React from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import './ModalDogImage.css';

export default function ModalDogImage(props) {
  const {imageSrc} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Image className="big-img" src={imageSrc} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}