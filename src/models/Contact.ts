export interface ContactsModel {
    "Id": number,
    "Nombre de Contacto": string,
    "Código Cliente": string,
    "Oficial": string,
    "Estado": string,
    "Nro. Documento": string,
    "Es Cliente Salario?": string,
    "Es Cliente?": string,
    "Correo electrónico": string,
    "Móvil": string,
    "Salario Actual": string,
    "Teléfono Fijo": string,
    "Teléfono Laboral": string,
    "Edad Contacto": string,
    "Nombre de Empresa": string,
    "Codigo Empresa": string,
    "Apellidos": string,
    "Tarjeta Preaprobada": string,
    "Prestamo": string
}

// export interface ContactDetailModel {
//     attachments: any;
//     statusHistories: any;
//     businessOfficer: any;
//     id:                      number;
//     caseStatusName:          string;
//     originName:              string;
//     caseOwnerUserName:       string;
//     contactFullname:         string;
//     contactPhone:            null;
//     ticketNumber:            string;
//     time:                    string;
//     companyName:             string;
//     contactDocumentTypeName: string;
//     contactDocumentNumber:   null;
//     contactClientCode:       null;
//     contactBranchName:       null;
//     contactMobile:           null;
//     promoterFullName:        string;
//     promoterPhone:           null;
//     promoterDocumentNumber:  null;
//     promoterEmail:           null;
//     typeName:                string;
//     subtypeName:             string;
//     typificationName:        string;
//     description:             null;
//     design:                  null;
//     callDirection:           string;
//     updatedAt:               null;
//     createdAt:               string;
//     idServidesk:             null;
//     resolverAreas:           any[];
//     resolvers:               any[];
//     businessOfficerName:     null;
//     solution:                null;
//     requestExtension:        string;
// }

export interface CreateContactModel{
    firstName: string,
    lastName: string,
    email: string,
    documentNumber: string,
    mobile: string,
    clientCode: string,
    department: string,
    documentTypeId: number,
    civilStatusId: number,
    nationality: string,
    genderId: number,
    dateOfBirth: Date,
    contactAge: number,
    walletTypeId: number,
    clientStatus: string,
    contactTypeId: number,
    clientType: string,
    isClient: string,
    isClerk: string,
    isClientSalary: string,
    secondaryEmail: string,
    landline: string,
    phone: string,
    address: string,
    homeNumber: string,
    reference: string,
    city: string,
    neighborhood: string,
    mailingStreet: string,
    mailingCountry: string,
    mailingState: string,
    mailingCity: string,
    workPlace: string,
    currentSalary: number,
    workPhone: string,
    companiesIds: any[],
    economicActivity: string,
    description: string,
    bancaId: number,
    branchId: number,
    branchManagerClerkId: number,
    branchManagerUserId: number,
    supervisorUserId: number,
    teamLeaderUserId: number,
    teamLeaderClerkId: number,
    supervisorClerkId: number,
    officialId: number,
    sendMailInThisDirection: boolean,
    companyId:number,
    ContactOwnerId:number
  }