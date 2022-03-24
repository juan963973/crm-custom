// import axios from "axios";

// import { CaseDetailModel } from "../models/Case";



// export async function listCases(): Promise<CaseDetailModel[]> {

//     //    const res = await axios.get<CaseDetailModel[]>(`${process.env.BASE_URL}/case`)

//     // return res.data

//     return new Promise((resolve: any) => {

//         resolve([{

//             id: 1,
//             caseSatus: 'caseSatus',
//             caseOrigin: 'caseOrigin',
//             caseOwnerName: 'caseOwnerName',
//             contactName: 'contactName',
//             contactPhone: 'contactPhone',
//             ticketNumber: 'ticketNumber',
//             time: 'time',
//             companyName: 'companyName',
//             documentTypeName: 'documentTypeName',
//             documentNumber: 'documentNumber',
//             clientCode: 'clientCode',
//             clientBranch: 'clientBranch',
//             contactMobile: 'contactMobile',
//             promoterName: 'promoterName',
//             promoterPhone: 'promoterPhone',
//             promoterDocumentNumber: 'promoterDocumentNumber',
//             promoterEmail: 'promoterEmail',
//             typeName: 'typeName',
//             subtypeName: 'subtypeName',
//             typificationName: 'typificationName',
//             description: 'description',
//             caseOriginName: 'caseOriginName',
//             design: 'design',
//             callDirection: 'callDirection',
//             updatedAt: 'updatedAt',
//             createdAt: 'createdAt',
//             idServidesk: 'idServidesk',
//             resolverAreas: ['call center', 'tarjeta'],
//             resolvers: ['user1', 'user2'],
//             businessOfficerName: 'businessOfficerName',
//             solution: 'solution',
//             requestExtension: 'requestExtension'

//         }]

//         );

//     });

// }

import axios from "axios";
import { CaseDetailModel } from "../models/Case";



export async function listCases(): Promise<CaseDetailModel[]> {
    const res = await axios.get<CaseDetailModel[]>(`https://localhost:5001/v1/api/Cases/1`)
    return res.data
}

//TODO VER PORQUE NO ME ESTÁ FUNCIONANDO PROCESS.ENV
export async function kanbanView(page:any, filterModel:string, resolverAreaId:number): Promise<any[]> {
    console.log(process.env)
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/${page}/kanban-view`,
        {
            params: {
                filterModel: JSON.stringify(filterModel),
                resolverAreaId: resolverAreaId
            }
        }
    )
    return res.data
}

//TODO VER PORQUE NO ME ESTÁ FUNCIONANDO PROCESS.ENV
export async function getFieldsFilter(page:any): Promise<any[]> {
    const res = await axios.get<any[]>(`https://localhost:5001/v1/api/filter/${page}`)
    return res.data
}