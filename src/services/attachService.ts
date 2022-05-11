import axios from "axios"


const importFile = async (id: any, file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    const attachmentModel = {
        module: "Case",
        moduleId: id,
        file: formData
    }
    try {
        const res = await axios.post(`https://localhost:5001/v1/api/Attachment?module=Case&moduleId=${id}`, formData);
        console.log('success attach file')
    } catch (ex) {
        console.log(ex);
    }
}

export async function viewFile(id: any) {
    try {
        const res = await axios.get(`https://localhost:5001/v1/api/Attachment?id=${id}`)
        console.log('Se inicio la descarga')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteFile(id: any) {
    try {
        const res = await axios.delete(`https://localhost:5001/v1/api/Attachment?id=15${id}`)
        console.log('Se elimina')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export { importFile }