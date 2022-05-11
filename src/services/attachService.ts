import axios from "axios"

const importFile = async (id: any, file: any) => {
    const formData = new FormData();
    console.log('el ide es:L', id.id)
    formData.append("file", file);
    const attachmentModel = {
        module: "Case",
        moduleId: id,
        file: formData
    }
    try {
        const res = await axios.post(`${process.env.BASE_URL}/Attachment?module=Case&moduleId=${id.id}`, formData);
        console.log('success attach file')
    } catch (ex) {
        console.log(ex);
    }
}

export const urlFile = `${process.env.BASE_URL}/Attachment?id=`

export async function deleteFile(id: any) {
    try {
        const res = await axios.delete(`${process.env.BASE_URL}/Attachment?id=${id}`)
       alert('Archivo Eliminado')
       console.log('Archivo eliminado :', res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export { importFile }