import axios from "axios";

import { CaseDetailModel } from "../models/Case";



export async function listCases(): Promise<CaseDetailModel[]> {

    //    const res = await axios.get<CaseDetailModel[]>(`${process.env.BASE_URL}/case`)

    // return res.data

    return new Promise((resolve: any) => {

        resolve([{

            id: 1,
            caseSatus: 'caseSatus',
            caseOrigin: 'caseOrigin',
            caseOwnerName: 'caseOwnerName',
            contactName: 'contactName',
            contactPhone: 'contactPhone',
            ticketNumber: 'ticketNumber',
            time: 'time',
            companyName: 'companyName',
            documentTypeName: 'documentTypeName',
            documentNumber: 'documentNumber',
            clientCode: 'clientCode',
            clientBranch: 'clientBranch',
            contactMobile: 'contactMobile',
            promoterName: 'promoterName',
            promoterPhone: 'promoterPhone',
            promoterDocumentNumber: 'promoterDocumentNumber',
            promoterEmail: 'promoterEmail',
            typeName: 'typeName',
            subtypeName: 'subtypeName',
            typificationName: 'typificationName',
            description: 'description',
            caseOriginName: 'caseOriginName',
            design: 'design',
            callDirection: 'callDirection',
            updatedAt: 'updatedAt',
            createdAt: 'createdAt',
            idServidesk: 'idServidesk',
            resolverAreas: ['call center', 'tarjeta'],
            resolvers: ['user1', 'user2'],
            businessOfficerName: 'businessOfficerName',
            solution: 'solution',
            requestExtension: 'requestExtension'

        }]

        );

    });

}