export const canAccess = (url:string, type:string = "") => {
    
    let auth
    if (typeof window !== 'undefined') {
        auth = localStorage?.getItem('auth')
    } else {
        return false
    }

    if(!auth) {
        return false
    }

    auth = JSON.parse(auth);
    let permissions = auth.user.roles?.[0].functionPoint
    let resp = true;

    if(url == '/') {
        return true
    }

    let pathAll = url.substring(1).toLocaleUpperCase()
    let path = pathAll.split('/').shift();

    if(type == 'url') {
        // Control de acceso a todas las rutas /cases, /cases/new etc
        let can_access:string = `CAN_ACCESS_${path}`
        let can_manage:string = `CAN_MANAGE_${path}`
        if(pathAll.includes('new') || pathAll.includes('edit') || pathAll.includes('show')) {
            if(permissions.indexOf(can_manage) > 0) {
                return true
            } else {
                return false
            }
        }
        if(permissions.indexOf(can_access) === -1) {
            resp = false
        }
    } else {
        // Tipo eventos para los que no son rutas o sea, para los botones etc
        let can_manage:string = `CAN_MANAGE_${path}`
        if(permissions.indexOf(can_manage) === -1) {
            resp = false
        }
    }
    return resp
}