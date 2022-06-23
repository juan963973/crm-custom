export interface ContactsModel {
    "id": number,
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
    departmentId: string,
    documentTypeId: string,
    civilStatusId: string,
    nationalityId: string,
    genderId: string,
    dateOfBirth: Date,
    contactAge: string,
    walletTypeId: string,
    clientStatus: string,
    contactTypeId: string,
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
    cityId: string,
    neighborhood: string,
    mailingStreet: string,
    mailingCountry: string,
    mailingState: string,
    mailingCity: string,
    workPlace: string,
    currentSalary: string|number,
    workPhone: string,
    companiesIds: any[],
    economicActivity: string,
    description: string,
    bancaId: string,
    branchId: number,
    branchCode: string,
    branchManagerClerkId: string,
    branchManagerUserId: string,
    supervisorUserId: string,
    teamLeaderUserId: string,
    teamLeaderClerkId: string,
    supervisorClerkId: string,
    officialId: string,
    sendMailInThisStreet: boolean,
    companyId:string,
    contactOwnerId:string
  }