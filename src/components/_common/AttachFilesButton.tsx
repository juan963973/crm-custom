import React, { useCallback, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDropzone, FileWithPath } from 'react-dropzone';
import { importFile } from "services/attachService";


export default function AttachFilesButton(id: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadFiles =  async () => {
    let formData = new FormData();

    for (var i = 0; i < acceptedFiles.length; i++) {
      let file = acceptedFiles[i];
      formData.append('articleFiles[]', file);
      const e = await importFile(id, file)
      console.log('formData', formData)
    }
    // alert('Archivo(s) enviados con exito')
    location.reload();
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({    
    maxFiles:10,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'application/pdf': ['.pdf'],
      'image/bmp': ['.bmp'],
      'application/vnd.oasis.opendocument.presentation': ['.odp'],
      'application/vnd.oasis.opendocument.spreadsheet': ['.ods'],
      'application/vnd.oasis.opendocument.text': ['.odt'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/rtf': ['.rtf'],
      'image/svg+xml': ['.svg'],
      'image/tiff': ['.tiff'],
      'image/tif': ['.tif'],
      'text/plain': ['.txt'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    },
    maxSize:10485760,
    
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