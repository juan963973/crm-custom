import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import { Button } from 'react-bootstrap';

export default function AttachFilesLoad(btn:any) {
  console.log("btn::", btn)
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  useEffect(() => {
    if(btn) {
      const a = (e:any) => handleSubmit(e)
      
      const formData = createFormData();

      async () => {
        console.log("entro en le async")
        try {
          await axios.post('https://some-api.com', formData, {
            'content-type': 'multipart/form-data',
          });
        } catch (error) {
          console.error('Failed to submit files.');
        }
        console.log('funcionaaaaaa')
      }
    }
  }, [])

  const inputRef = useRef();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = createFormData();

    // try {
    //   axios.post('https://some-api.com', formData, {
    //     'content-type': 'multipart/form-data',
    //   });
    // } catch (error) {
    //   console.error('Failed to submit files.');
    // }
    console.log('funcionaaaaaa')
  };

  return (
    <div>
      <div className="form-container">
        {/* Provide a drop zone and an alternative button inside it to upload files. */}
        <div

          onClick={() => inputRef.current.click()}
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}

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
          <p>Haga clic aquí o suelte los archivos aquí para adjuntarlos</p>

          {/* <button onClick={() => inputRef.current.click()}>Or select files to upload</button> */}

          {/* Hide the crappy looking default HTML input */}
          <input ref={inputRef} type="file" multiple style={{ display: 'none' }} onChange={(e) => setFiles(e, 'a')} />
        </div>
        {/* Display the files to be uploaded */}
        <div>
          <ul>
            {fileNames.map((name) => (
              <div key={name}
              >
                <img src="/foldericon.png" width="20" height="20" />
                <span style={{ marginLeft: 5, marginRight: 5, }}>{name}</span>
                <img src="/closeicon.png" width="12" height="12" onClick={() => removeFile(name)} />
              </div>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              {/* <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li> */}

              <div className="clear-all">
                <Button variant="danger" className="btn-sm" onClick={() => clearAllFiles()}>Limpiar archivos</Button>
              </div>
            </ul>
          )}

        </div>
      </div>
      {/* <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div> */}
    </div>
  );
};