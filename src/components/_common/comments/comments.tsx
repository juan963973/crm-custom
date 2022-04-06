import { useEffect, useState } from "react"
import Comment from './comment'
import CommentForm from "./commentForm"

import { 
    getComments as getCommentsApi, 
    createComment as createCommentApi, 
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi,
} from "./notes_api"

import addNote from "./notes_api"
import updateNote from "./notes_api"
import throwNote from "./notes_api"

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
        // addNote(text)
    }

    const deleteComment = (commentId: any) => {
        if (window.confirm('¿Está seguro de que desea eliminar la nota?')){
            deleteCommentApi().then(() => {
                const updateBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                )
                setBackendComments(updateBackendComments)
            })
        }
    }

    const updateComment = (text: any, commentId: any) => {
        updateCommentApi(text).then(() =>{
            const updatedtBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text }
                }
                return backendComment
            })
            setBackendComments(updatedtBackendComments)
            setActiveComment(null)
        })
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
{/* {throwNote()} */}
        </div>
    )
}

export default Comments