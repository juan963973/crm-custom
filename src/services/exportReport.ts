import axios from "axios"

export default async function exportReport(dayOne: string, dalyTwo: string) {
    const res = await axios.get(`${process.env.BASE_URL}/Exportation/cases/BCP?from=${dayOne}&to=${dalyTwo}`)
    return console.log('exportReport', res.status)
}