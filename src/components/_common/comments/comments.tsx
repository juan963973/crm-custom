import { useEffect, useState } from "react"
import axios from "axios";
import Comment from './comment'
import CommentForm from "./commentForm"

import { 
    getComments as getCommentsApi, 
    createComment as createCommentApi, 
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi,
} from "./notes_api"

import {addNote, updateNote, throwNote, getNotess} from "./notes_api"

import { listCases } from "../../../services/caseService";
import { CaseDetailModel } from ".../../models/Case";

const Comments = ({ currentUserId }: any) => {
    const [backendComments, setBackendComments] = useState([])
    const [ activeComment, setActiveComment ] =useState(null)
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    
    // console.log('backendComments', backendComments)
    // console.log('rootComments', rootComments)

    const addComment = (text: any, parentId: any) =>{
        console.log('addComent', text, parentId)
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        })
        addNote(text)
    }

    const deleteComment = (Id: any) => {
        if (window.confirm('¿Está seguro de que desea eliminar la nota?')){
            deleteCommentApi().then(() => {
                const updateBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== Id
                )
                setBackendComments(updateBackendComments)
                throwNote(Id)
            })
        }
    }

    const updateComment = (text: any, Id: any) => {
        updateCommentApi(text).then(() =>{
            const updatedtBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === Id) {
                    return { ...backendComment, body: text }
                }
                return backendComment
            })
            setBackendComments(updatedtBackendComments)
            setActiveComment(null)
        })
        updateNote(text, Id)
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data)
        });
    }, []);
    return (
        <div className="comments">
            <CommentForm submitLabel='Guardar' handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment 
                    key={rootComment.id}
                    comment={rootComment}
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    updateComment={updateComment}
                    />
                ))}
            </div>
            {getNotess()}
        </div>
    )
}

export default Comments