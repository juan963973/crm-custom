import { useState } from "react";
import Comments from "./comments/comments";
import Comment from "./comments/comment"
import CommentForm from "./comments/commentForm"


export default function Notes() {
    return(
        <>
        <Comments currentUserId='1'/>
        </>
    )
}