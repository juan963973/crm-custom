import axios from "axios";
import { useEffect, useState } from "react";


export default function getCompanyData(id: number) {
    const [data, setData] = useState([])
useEffect(() => {
    axios.get((`https://localhost:5001/v1/api/Companies/${id}/details`)).then((response) => {
        setData(response.data)
    });
}, []);
    return data
}