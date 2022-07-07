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
        return Promise.resolve(err);
    }
);

axios.interceptors.response.use( resp => resp, async error  => {

        if(error.response.status === 401) {
            let auth
            auth = localStorage?.getItem('auth')
            auth = JSON.parse(auth);
            const response = await axios.post(`${process.env.BASE_URL}/users/refresh_token?refresh_token=${auth.token.refresh_token}`)

            if(response.status === 200) {
                localStorage?.setItem('auth', JSON.stringify(response.data));
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token.access_token}`
                return axios(error.config)
            }
        }
        return error
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