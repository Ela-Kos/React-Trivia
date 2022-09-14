import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Modal.css'

function Homemodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modalBtn" variant="primary" onClick={handleShow}>
        i
      </Button>

      <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className="modalTitle">ABOUT (this.quiz)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <p>(this.quiz) is a frontend web development trivia quiz developed with
          React JS software by San Singh and Ela Kos</p>
          <p>APIs and links:
          https://avatars.dicebear.com/styles/bottts</p>
        </Modal.Body>
        <Modal.Footer className="modalFooter">© 2022</Modal.Footer>
      </Modal>
    </>
  );
}

export default Homemodal;
