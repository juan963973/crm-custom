import axios from "axios";

export async function getResolutionAreasFilter(): Promise<any[]> {
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/Info/list-resolver-areas`)
    return res.data
}

export async function searchGlobal(q:string): Promise<any[]> {
    let data:object = {
        params: { q }
    }
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/fullsearch`, data)
    return res.data
}