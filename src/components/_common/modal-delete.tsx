import { useEffect, useState } from "react";
import { Button, ButtonToolbar } from "rsuite";
import Modal from 'rsuite/Modal';

const ModalDelete = (status:any=false, deleteHandle:any) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setOpen(false)
    },[status])
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={handleOpen}>Disable</Button>
        </ButtonToolbar>
  
        <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
          <Modal.Body>
            Desea Eliminar el registro?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={deleteHandle()} appearance="primary">
              Si
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

export default ModalDelete;