import {permissionFront} from 'auth/permissions'

export const routes = [
    { url: '/contacts', title: 'Contactos', permission: permissionFront.CAN_VIEW_CONTACT},
    // { url: '/contacts/new', title: 'Contactos', permission: permissionFront.CAN_CREATE_CONTACT},
    // { url: '/contacts/edit', title: 'Contactos', permission: permissionFront.CAN_UPDATE_CONTACT},
    // { url: '/contacts/show', title: 'Contactos', permission: permissionFront.CAN_VIEW_CONTACT},
    { url: '/companies', title: 'Empresas', permission: permissionFront.CAN_VIEW_COMPANIES},
    // { url: '/companies/new', title: 'Empresas', permission: permissionFront.CAN_CREATE_COMPANIES},
    // { url: '/companies/edit', title: 'Empresas', permission: permissionFront.CAN_UPDATE_COMPANIES},
    // { url: '/companies/show', title: 'Empresas', permission: permissionFront.CAN_VIEW_COMPANIES},
    { url: '/cases', title: 'Casos', permission: permissionFront.CAN_LIST_VIEW_CASES},
    // { url: '/cases/new', title: 'Casos', permission: permissionFront.CAN_CREATE_CASES},
    // { url: '/cases/edit', title: 'Casos', permission: permissionFront.CAN_LIST_VIEW_CASES},
    // { url: '/cases/show', title: 'Casos', permission: permissionFront.CAN_LIST_VIEW_CASES},
]  