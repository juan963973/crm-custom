import axios from "axios";
import { CreateOrUpdateCompanyModel } from "models/Company";
import { useEffect, useState } from "react";


export default async function getCompanyData(id: number) {
    const {data} = await axios.get((`${process.env.BASE_URL}/Companies/${id}/details`));
    return data
}

export async function createCompany(page:any,model:CreateOrUpdateCompanyModel): Promise<any[]> {
    const res = await axios.post<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}