import axios from "axios"

export async function caseHistoryState() {
    const res = await axios.get(`https://localhost:5001/v1/api/Search/case-status?limit=5`)
    return res.data
}