export const CanActive = (key:string) => {
    if (typeof window === 'undefined') {
        return false
    }
    let auth
    auth = localStorage?.getItem('auth')
    if(!auth) {
        return false 
    }
    auth = JSON.parse(auth);
    let permissionsBack = auth.user.roles?.[0].functionPoint
    
    return permissionsBack.includes(key)
}