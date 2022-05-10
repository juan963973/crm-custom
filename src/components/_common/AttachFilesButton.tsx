import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import importFile from "services/attachService";

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
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({    
    maxFiles:2,
    accept: {
      'image/png': ['.png'],
      'image/png': ['.jpg'],
      'text/html': ['.html', '.htm'],
    }
  });

  // console.log(props.id)
  const files = acceptedFiles.map(file => (
    <Row key={file.path}>
      <Col sm={1}><img src="/foldericon.png" width="20" height="20"  style={{marginRight: '10x'}}/></Col>
      <Col>{file.path}
      - {file.size}
      bytes</Col>
    </Row>
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
            <div {...getRootProps({ className: 'dropzone' })}
            style={{
              color: 'gray',
              marginBottom: 10,
              marginTop: 10,
              borderColor: 'rgb(237, 240, 244)',
              borderStyle: 'dashed',
              borderWidth: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'ceneter',
              height: '80px'
            }}
            >
              <input {...getInputProps()} />
              <p>Haga clic aquí o suelte los archivos para adjuntarlos.</p>
            </div>
            {files.length > 0 && <React.Fragment>
              <div>
                <ul>{files}</ul>
              </div>
            </React.Fragment>}
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={submitButton}>
            Adjuntar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}