import axios from "axios";
import { useEffect, useState } from "react";
import { ContactDetailModel, CreateContactModel } from "../models/Contact";

//TODO VER PORQUE NO ME ESTÁ FUNCIONANDO PROCESS.ENV
export async function detail(page:any, id:any): Promise<ContactDetailModel> {
    const res = await axios.get<ContactDetailModel>(`${process.env.BASE_URL}/Contacts/${id}/details`)
    return res.data
}

export async function create(page:any,model:CreateContactModel): Promise<any[]> {
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

export async function saveUpdate(page:any,model:CreateContactModel): Promise<any[]> {
    const res = await axios.put<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}

export async function deleteContact(page:any): Promise<any[]> {
    const res = await axios.delete<any[]>(`${process.env.BASE_URL}/${page}`)
    return res.data
}


export default async function getContactData(id: number) {
    const {data} = await axios.get((`${process.env.BASE_URL}/Contacts/${id}/details`));
    return data
}
