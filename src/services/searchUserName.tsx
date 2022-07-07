import axios from 'axios';

export async function searchUserName(id: string): Promise<string> {
    const res = await axios.get<any>(`${process.env.BASE_URL}/users/${id}`);
    return `${res.data.firtName} ${res.data.lastName}`
}