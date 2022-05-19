import axios from "axios";
import { CaseDetailModel, CreateCaseModel } from "../models/Case";

//TODO VER PORQUE NO ME ESTÁ FUNCIONANDO PROCESS.ENV
export async function detail(page:any, id:any): Promise<CaseDetailModel> {
    const res = await axios.get<CaseDetailModel>(`${process.env.BASE_URL}/Cases/${id}/details`)
    return res.data
}

export async function create(page:any,model:CreateCaseModel): Promise<any[]> {
    const res = await axios.post<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}

export async function refenceField(page:any,id:any): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}?id=${id}`)
    return res.data
}

export async function update(page:any,id:any): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}/${id}`)
    return res.data
}

export async function saveUpdate(page:any,model:CreateCaseModel): Promise<any[]> {
    const res = await axios.put<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}

export async function deleteCase(page:any): Promise<any[]> {
    const res = await axios.delete<any[]>(`${process.env.BASE_URL}/${page}`)
    return res.data
}
