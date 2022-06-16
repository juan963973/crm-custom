import {permissionFront} from 'auth/permissions'

export const routes = [
    {
        hideNavbar: 0,
        url: '/contacts', 
        title: 'Contactos',
        view: permissionFront.CAN_VIEW_CONTACTS, 
        new: permissionFront.CAN_CREATE_CONTACTS,
        edit: permissionFront.CAN_UPDATE_CONTACTS,
        show: permissionFront.CAN_VIEW_CONTACTS, 
        delete: permissionFront.CAN_REMOVE_CONTACTS,
    },
    {
        hideNavbar: 0,
        url: '/companies', 
        title: 'Empresas',
        view: permissionFront.CAN_VIEW_COMPANIES, 
        new: permissionFront.CAN_CREATE_COMPANIES,
        edit: permissionFront.CAN_UPDATE_COMPANIES,
        show: permissionFront.CAN_VIEW_COMPANIES, 
        delete: permissionFront.CAN_VIEW_COMPANIES,
    },
    {
        hideNavbar: 0,
        url: '/cases', 
        title: 'Casos',
        view: permissionFront.CAN_LIST_VIEW_CASES, 
        new: permissionFront.CAN_CREATE_CASES,
        edit: permissionFront.CAN_UPDATE_CASES,
        show: permissionFront.CAN_LIST_VIEW_CASES,
        delete: permissionFront.CAN_REMOVE_CASES,
        export: permissionFront.CAN_LIST_VIEW_CASES,
    },
    // {
    //     hideNavbar: 1,
    //     url: '/export', 
    //     title: 'Exportar',
    //     view: permissionFront.CAN_LIST_VIEW_CASES, 
    //     new: permissionFront.CAN_CREATE_CASES,
    //     edit: permissionFront.CAN_UPDATE_CASES,
    //     show: permissionFront.CAN_LIST_VIEW_CASES,
    //     delete: permissionFront.CAN_REMOVE_CASES,
    // }
]  