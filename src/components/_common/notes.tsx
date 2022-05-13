import Comments from "./comments/comments";


export default function Notes( {id} : any ) {
    return(
        <>
        <Comments currentUserId={id}/>
        </>
    )
}