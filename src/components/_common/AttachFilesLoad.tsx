import axios from 'axios'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function AttachFilesLoad() {
  const [fileSelected, setFileSelected] = useState();
  const saveFileSelected= (e: any) => {
      setFileSelected(e.target.files[0]);
  };
  const importFile= async (e: any) => {
      const formData = new FormData();
      formData.append("file", fileSelected);
      const attachmentModel = {
          module: "Case",
          moduleId: 10,
          file: formData
      }
      console.log("mmm",attachmentModel)
      try {
          const res = await axios.post(`https://localhost:5001/v1/api/Attachment?module=Case&moduleId=${1}`, formData);
      } catch (ex) {
          console.log(ex);
      }
  };
  return (
  <>
      <input type="file" onChange={saveFileSelected} />
      <input type="button" value="siuuu" onClick={importFile} />
    {/* <Footer /> */}
  </>
)
};