import axios from "axios"
import { useEffect, useState } from "react";

export default function caseHistoryState() {
    const [stateItem, setStateItem] = useState([])
useEffect(() => {
    axios.get((`https://localhost:5001/v1/api/Search/case-status?limit=5`)).then((response) => {
        setStateItem(response.data)
    });
}, []);
    return stateItem
}