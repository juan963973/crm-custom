import axios from "axios";

export async function getResolutionAreasFilter(): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/Info/list-resolver-areas`)
    return res.data
}

export async function searchGlobal(q:string): Promise<any[]> {
    let data:object = {
        params: { q }
    }
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/fullsearch`, data)
    return res.data
}