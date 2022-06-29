import axios from 'axios';

export async function searchUserName(): Promise<string> {
    let auth:any = localStorage?.getItem('auth');
    auth = JSON.parse(auth);
    let id = auth?.user?.id;
    const res = await axios.get<any>(`${process.env.BASE_URL}/users/${id}`);

    return `${res.data.firtName} ${res.data.lastName}`
}