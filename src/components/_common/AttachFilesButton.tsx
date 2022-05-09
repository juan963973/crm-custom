import { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AttachFilesLoad from "./AttachFilesLoad";
import Child from './prueba'

export default function AttachFilesButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [btn, setBtn] = useState(false);

  const childRef = useRef();

  const submitButton = () => {
    // childRef.current.getAlert()
    setBtn(true)
    handleClose()
  }
  

  return (
    <>
      <Button variant="primary" className="btn btn-primary btn-sm" onClick={handleShow}>
        Adjuntar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adjuntar archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AttachFilesLoad btn={btn}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={submitButton}>
          {/* <Child ref={childRef} /> */}
            Adjuntar
          </Button>
        </Modal.Footer>
        {/* <div>
          <Child ref={childRef} />
          <button onClick={() => childRef.current.getAlert()}>Click</button>
        </div> */}
      </Modal>
    </>
  );
}