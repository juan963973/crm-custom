import axios from "axios";
import { useEffect, useState } from "react";
import { CaseDetailModel, CreateCaseModel } from "../models/Case";

export async function createCase(page:any,model:CreateCaseModel): Promise<any[]> {
    const res = await axios.post<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}

export async function refenceField(page:any,id:any): Promise<any[]> {
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}?id=${id}`)
    return res.data
}

export async function updateCase(page:any,id:any): Promise<any[]> {
    console.log(`${process.env.BASE_URL}/${page}/${id}`);
    
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/${page}/${id}`)
    return res.data
}

export default function getContactData(id: number) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get((`${process.env.BASE_URL}/Contacts/${id}/details`)).then((response) => {
            setData(response.data)
        });
    }, []);
    return data
}