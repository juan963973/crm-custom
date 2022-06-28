import { searchUserName } from "../../services/searchUserName";

export function getStrUserName(){
    const data = searchUserName();
    return(
    console.log('getUsername::::::::::::::::::::', data)
    )
}