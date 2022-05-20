import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { canAccess } from './canAccess';

export const RouteGuard = ({ children }:any) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);
    });

    const authCheck = (url:string) => {
        let auth:any = localStorage.getItem('auth')

        if(url == '/login') {
            if(auth) {
                router.push('/');
            }
        }

        if(auth) {
            let access = canAccess(url, 'url')
            if (access) {
                setAuthorized(true);
            } else {
                setAuthorized(false);
                if(url != '/') {
                    router.push('/');
                }
            }
        } else {
            setAuthorized(false);
            localStorage.removeItem('auth');
            if(url != '/login') {
                router.push('/login');
            } else {
                setAuthorized(true);
            }
        }
    }
    
    return (authorized && children);
}