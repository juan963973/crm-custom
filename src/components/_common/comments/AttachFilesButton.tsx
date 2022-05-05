import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AttachFilesButton(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adjuntar archivo</Modal.Title>
            </Modal.Header>
            <Modal.Body>Haga clic aquí o suelte los archivos para adjuntarlos.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Adjuntar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }