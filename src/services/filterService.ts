import axios from "axios";
export async function multiSelectOption(page:string): Promise<any[]> {
    const {data: { items, count } } = await axios.get(`${process.env.BASE_URL}/${page}`)
    return items
}

export async function multiSelectSimple(page:string): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}`)
    return res.data
}

export async function seletScroll(page:string,params?:any): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}`,{params})
    return res.data
}