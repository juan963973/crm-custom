import axios from "axios";

export async function multiSelectOption(page:any): Promise<any[]> {
    const {data: { items, count } } = await axios.get(`https://localhost:5001/v1/api/${page}`)
    return items
}

export async function multiSelectSimple(page:any): Promise<any[]> {
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/${page}`)
    return res.data
}