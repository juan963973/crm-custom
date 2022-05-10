import axios from "axios"

// export default async function importFile(id) {
//     const res = await axios.post(`https://localhost:5001/v1/api/Attachment?module=Case&moduleId=${id}`
//     alert('hello')
// }

const importFile= async (id: any, file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    const attachmentModel = {
        module: "Case",
        moduleId: id,
        file: formData
    }
    console.log("mmm",attachmentModel)
    try {
        const res = await axios.post(`https://localhost:5001/v1/api/Attachment?module=Case&moduleId=${id}`, formData);
        alert('success')
    } catch (ex) {
        console.log(ex);
    }
}

export default importFile