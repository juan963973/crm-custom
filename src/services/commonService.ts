import axios from "axios";

export async function kanbanView(module:any, filterModel:string, resolverAreaId:number): Promise<any[]> {
    let data:object = {
        params: {
            filterModel: JSON.stringify(filterModel),
            resolverAreaId: resolverAreaId
        }
    }
    const res = await axios.get<any[]>(`${process.env.BASE_URL}${module}/kanban-view`, data)
    return res.data
}

export async function kanbanChangeStatus(module:any, dataChange:any): Promise<any[]> {
    let statusId = dataChange?.statusId
    let data:object = {
        statusId
    }
    const res = await axios.put<any[]>(`${process.env.BASE_URL}${module}/${dataChange?.caseId}/change-status`, data)
    return res.data
}

export async function getFieldsFilter(module:any): Promise<any[]> {
    console.log('getFieldsFilter::ENV',process.env)
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/filter${module}`)
    return res.data
}

export async function getListView(module:any, filterModel?:string|null, resolverAreaId?:number|null, pageIndex?:any|null, pageSize?:any|null): Promise<any[]> {
    let data:object = {
        params: {
            filterModel: JSON.stringify(filterModel),
            resolverAreaId,
            pageIndex,
            pageSize
        }
    }
    const res = await axios.get<any[]>(`${process.env.BASE_URL}${module}/list-view`, data)
    return res.data
}

