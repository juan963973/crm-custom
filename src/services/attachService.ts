import axios from "axios"

const importFile= async (id: any, file: any) => {
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

export default importFile