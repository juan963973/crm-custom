import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CanActive } from './CanActive';
import { permissionFront } from 'auth/permissions';
import { routes } from 'pages/routes';


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

            const path = url.split('/');
            let routerFilter:any;
            let routerObj:any;
            if(path[2] !== undefined) {
                routerFilter = path[2];
                routes.forEach((element:any) => {
                    if(element.url == `/${path[1]}`) {
                        routerObj = element[routerFilter]
                    }
                })
            } else {
                routerFilter = 'view';
                routes.forEach((element:any) => {
                    if(element.url == `/${path[1]}`) {
                        routerObj = element[routerFilter]
                    }
                })
            }
            
            let access = CanActive(routerObj)
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