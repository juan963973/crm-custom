import axios from "axios";
import { CreateOrUpdateCompanyModel } from "models/Company";
import { useEffect, useState } from "react";


export default function getCompanyData(id: number) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get((`${process.env.BASE_URL}/Companies/${id}/details`)).then((response) => {
            setData(response.data)
        });
    }, []);
    return data
}

export async function createCompany(page:any,model:CreateOrUpdateCompanyModel): Promise<any[]> {
    const res = await axios.post<any[]>(`${process.env.BASE_URL}/${page}`,model)
    return res.data
}