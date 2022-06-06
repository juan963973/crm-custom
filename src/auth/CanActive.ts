export const CanActive = (key:string) => {
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
    let permissionsBack = auth.user.roles?.[0].functionPoint    
    return permissionsBack.includes(key)
}