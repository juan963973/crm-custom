import axios from "axios";
import { detail } from "services/caseService";
import {useEffect} from "react";

export const importFile = async (id: any, file: any, attachFiles: any, setAttachFiles: any) => {
    const formData = new FormData();
    console.log('el ide es:L', id)
    formData.append("file", file);
    const page = "cases";
    const attachmentModel = {
        module: "Case",
        moduleId: id,
        file: formData
    }
    try {
        const res = await axios.post(`${process.env.BASE_URL}/Attachment?module=Case&moduleId=${id}`, formData);
        detail(page, id)

            .then(data => {

                setAttachFiles(data.attachments)

            })

        console.log('success attach file')
    } catch (ex) {
        console.log(ex);
    }
}

export const urlFile = `${process.env.BASE_URL}/Attachment?id=`


export async function deleteFile(id: any, attachFiles: any, setAttachFiles: any) {
    try {
        const res = await axios.delete(`${process.env.BASE_URL}/Attachment?id=${id}`)
        const updateFile = attachFiles.filter(
            (attachFiles: any) => attachFiles.id !== id
        )
        setAttachFiles(updateFile)
       alert('Archivo Eliminado')
       console.log('Archivo eliminado :', res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function getFile (id: number, origin: string) {
    const method = 'GET';
        const url = `${process.env.BASE_URL}/Attachment?id=${id}`;
    try {
        axios
            .request({
                url,
                method,
                responseType: 'blob', //important
            })

            .then(({ data }) => {
                const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', `${origin}`); //any other extension
                document.body.appendChild(link);
                link.click();
                link.remove();
            });
    } catch (e) {
        console.error(e);
    }
}