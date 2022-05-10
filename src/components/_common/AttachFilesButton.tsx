import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import importFile from "services/attachmentFilesService";

export default function AttachFilesButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = 1

  const uploadFiles = () => {
    let formData = new FormData();

    for (var i = 0; i < acceptedFiles.length; i++) {
      let file = acceptedFiles[i];
      formData.append('articleFiles[]', file);
      importFile(id, file)
      console.log('formData', formData)
    }

    // axios({
    //   method: 'post',
      
    //   data: formData,

    //   })
      
    alert('siuuu')
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // console.log(props.id)
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
      - {file.size}
      bytes
    </li>
  ));

  const submitButton = () => {
    uploadFiles()

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
          <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            {files.length > 0 && <React.Fragment>
              <div>
                <h4>Files</h4>
                <ul>{files}</ul>
              </div>
              {/* <button>Submit</button> */}
            </React.Fragment>}

          </section>
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