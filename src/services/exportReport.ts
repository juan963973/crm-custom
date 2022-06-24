import axios from "axios"

export default async function exportReport(dayOne: string, dalyTwo: string) {
    await axios
    .request({
        url: `${process.env.BASE_URL}/Exportation/cases/BCP?from=${dayOne}&to=${dalyTwo}`,
        method: 'get',
        responseType: 'blob',
    })
    .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        console.log('downloadUrl::', downloadUrl)
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', `Reporte_Casos_BCP.csv`); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
    });
    // const res = await axios.get(`${process.env.BASE_URL}/Exportation/cases/BCP?from=${dayOne}&to=${dalyTwo}`)
    // return console.log('exportReport', res.status)
}