import axios from "axios";
import { useEffect, useState } from "react";


export default async function getCompanyData(id: number) {
    const {data} = await axios.get((`${process.env.BASE_URL}/Companies/${id}/details`));
    return data
}