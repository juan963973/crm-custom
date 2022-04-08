import axios from "axios";
import { CaseDetailModel, CreateCaseModel } from "../models/Case";

//TODO VER PORQUE NO ME ESTÁ FUNCIONANDO PROCESS.ENV
export async function listCases(page:any, id:any): Promise<CaseDetailModel> {
    const res = await axios.get<CaseDetailModel>(`https://localhost:5001/v1/api/${page}/${id}`)
    return res.data
}

export async function kanbanView(page:any, filterModel:string, resolverAreaId:number): Promise<any[]> {
    let data:object = {
        params: {
            filterModel: JSON.stringify(filterModel),
            resolverAreaId: resolverAreaId
        }
    }
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/${page}/kanban-view`, data)
    return res.data
}

export async function getFieldsFilter(page:any): Promise<any[]> {
    console.log('getFieldsFilter::ENV',process.env)
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/filter/${page}`)
    return res.data
}

export async function createCase(page:any,model:CreateCaseModel): Promise<any[]> {
    const res = await axios.post<any[]>(`https://localhost:5001/v1/api/${page}`,model)
    return res.data
}

export async function refenceField(page:any,id:any): Promise<any[]> {
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/${page}?id=${id}`)
    return res.data
}

export async function updateCase(page:any,id:any): Promise<any[]> {
    console.log(`https://localhost:5001/v1/api/${page}/${id}`);
    
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/${page}/${id}`)
    return res.data
}
