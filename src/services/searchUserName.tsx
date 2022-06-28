import axios from 'axios';

export async function searchUserName(): Promise<any[]> {
    let auth:any = localStorage?.getItem('auth');
    auth = JSON.parse(auth);
    let id = auth?.user?.id;
    console.log('id', id);
    const res = await axios.get<any[]>(`${process.env.BASE_URL}/users/${id}`);
    return res.data
}