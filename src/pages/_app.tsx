import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '../../public/styles/globals.css'
import '../../public/styles/custom.scss';
import Layout from '../components/layouts/default'

import { RouteGuard } from '../auth/RouteGuard';
import axios from 'axios';

const instance = axios.create();
axios.interceptors.request.use(
    (req) => {
        let auth:any = localStorage.getItem('auth')
        if(auth) {
            auth = JSON.parse(auth);
            req.headers.Authorization = `Bearer ${auth.token.access_token}`;
        }
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (req) => { return req },
    (err) => {
        // const status = err.response ? err.response.status:null
        let auth
        auth = localStorage?.getItem('auth')
        auth = JSON.parse(auth);
        let body = {refresh_token: auth.token.refresh_token}

        // if (status === 401) {
        //     axios.post(`${process.env.BASE_URL}/users/refresh_token`, body)
        //     .then((res) => {
        //         localStorage?.setItem('auth', JSON.stringify(res));
        //     })
        //     .catch((err) => {    console.log(err); });
        // }
        if(err == 'Error: Network Error') { // 401 Unauthorized
            let auth
            auth = localStorage?.getItem('auth')
            auth = JSON.parse(auth);
            let body = {refresh_token: auth.token.refresh_token}
            
            console.log('entro en el interceptor::', body)
            axios.post(`${process.env.BASE_URL}/users/refresh_token`, body)
            .then((res) => {
                console.log('respuesta del refresh_token: ', res)
                // localStorage?.setItem('auth', JSON.stringify(res));
            })
            .catch((err) => {    console.log(err); });
        }

        return Promise.resolve(err);
    }
);


type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    // Component: NextPageWithLayout
    Component: any
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    if(Component.getLayout) {
        return <RouteGuard> <Component {...pageProps} /> </RouteGuard>
    }

    return (
        <Layout>
            <RouteGuard>
                <Component {...pageProps} />
            </RouteGuard>
        </Layout>
    )
}