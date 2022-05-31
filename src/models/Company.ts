export interface CreateOrUpdateCompanyModel {
        name:string;
        ruc:string;
        foundation:Date;
        clientType:string;
        parentCompanyId:number;
        nationality:number;
        contactsIds:[];
        description:string;
        sourceFunds: string;
        economicActivity:string;
        employersQuantity:number;
        billingRangeId:number;
        walletTypeId:number;
        paymentEntity:number;
        operatingEntitiesIds:[];
        economicActivitiesIds:[];
        address:string;
        email:string;
        reference:string;
        homeNumber:number;
        department:number;
        city:number;
        neighborhood:string;
        billingCountry:string;
        billingState:string;
        billingStreet:string;
        billingCity: string;
        isClient:string;
        clientCode:string;
        bancaId:number;
        clientState:string;
        branchId:number;
        officialId:number;
        teamLeaderUserId:number
}

export class CompanyModel {
    name: string
}
