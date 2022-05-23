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

// For POST requests
axios.interceptors.response.use(
    (res) => {
        // Add configurations here
        if (res.status === 201) {
            console.log('Posted Successfully from interceptor');
        }
        return res;
    },
    (err) => {
        return Promise.reject(err);
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