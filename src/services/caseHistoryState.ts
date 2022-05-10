import axios from "axios"
import { useEffect, useState } from "react";

export default function caseHistoryState() {
    const [stateItem, setStateItem] = useState([])
useEffect(() => {
    axios.get((`${process.env.BASE_URL}/Search/case-status?limit=5`)).then((response) => {
        setStateItem(response.data)
    });
}, []);
    return stateItem
}