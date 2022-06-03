export interface CreateOrUpdateCompanyModel {
        name:string;
        ruc:string;
        foundation:Date;
        clientType:string;
        parentCompanyId:number;
        nationalityId:number;
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
        phone:string;
        mobile:string;
        address:string;
        email:string;
        reference:string;
        homeNumber:number;
        departmentId:number;
        cityId:number;
        neighborhood:string;
        billingCountry:string;
        billingState:string;
        billingStreet:string;
        billingCity: string;
        isClient:string;
        clientCode:string;
        bancaId:number;
        clientState:string;
        branchCode:string;
        officialId:number;
        teamLeaderClerkId:number
}

export class CompanyModel {
    name: string
}
