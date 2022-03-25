export interface CasesModel {
    "id": number;
    "Creado el": Date;
    "Numero de Ticket": string;
    "Tipo": string;
    "Subtipo": string;
    "Tipificacion": string;
    "Sucursal Recepcion": string;
    "Hora de Recepcion": string;
    "Sucursal Afectada": string;
    "Estado": string;
    "Origen": string;
    "Subject": string;
    "Descripcion": string;
    "Dueño del caso": string;
    "Areas Resolutoras": string;
    "Empresa": string;
    "Direccion de Llamada": string;
    "Tags": string;
    "Actualizado el": string;
    "Solucion": string;
    "Comentario": string;
    "Pedido de extension": boolean;
    "Oficial de Negocios": string;
    "Promotor": string;
    "Numero de Comentarios": number;
    "Contacto": string;
    "Email": string;
    "Nro de Cliente":string;
    "Telfono Contacto":string;
    "Contacto Full name":string;
    "Sucursal Cliente":string;
    "Layout":string;
}

export interface CaseDetailModel {
    id: number;
    caseSatus: string;
    caseOrigin: string;
    caseOwnerName: string;
    contactName: string;
    contactPhone: string;
    ticketNumber: string;
    time: string;
    companyName: string;
    documentTypeName: string;
    documentNumber: string;
    clientCode: string;
    clientBranch: string;
    contactMobile: string;
    promoterName: string;
    promoterPhone: string;
    promoterDocumentNumber: string;
    promoterEmail: string;
    typeName: string;
    subtypeName: string;
    typificationName: string;
    description: string;
    caseOriginName: string;
    design: string;
    callDirection: string;
    updatedAt: string;
    createdAt: string;
    idServidesk: string;
    resolverAreas: string[];
    resolvers: string[];
    businessOfficerName: string;
    solution: string;
    requestExtension: string
}

