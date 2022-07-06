import { Row, Col } from 'react-bootstrap'
import CommentForm from './commentForm'
import { searchUserName } from "../../../services/searchUserName";
import {useEffect, useState} from "react";
import {getDateStr, getHourStr, getHourStrUtc } from "../timeToString";

const Comment = ({
    comment,
    currentUserId,
    updateComment,
    deleteComment,
    activeComment,
    setActiveComment,
    user,
    backendComments
}: any) => {
    // const fiveMinutes = 300000
    // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
    // const canReply = Boolean(currentUserId)
    // const canEdit = currentUserId === comment.userId
    // const canDelete = currentUserId === comment.userId
    const createdAt = new Date(comment.createdAt).toLocaleDateString()
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id

    const [author, setAuthor] = useState('');
    const [modifier, setModifier] = useState('');

    useEffect(() => {
        searchUserName(comment.userWhoCreatedId).then((user) => { setAuthor(user) })
        searchUserName(comment.userWhoUpdatedId).then((user) => { setModifier(user) })
    }, [backendComments]);

    return (
        <Row className="comment" style={{marginBottom: '10px'}}>
            <Col sm={1} style={{ marginRight: '15px'}}>
                <div className="comment-image-container">
                    <img src="/userIcon.png" width="60" height="60" />
                </div>
            </Col>
            <Col>
                <div className="comment-right-part">
                    <div className="comment-content">
                        {/* <div className="comment-author">{comment.username}</div > */}
                        <div><b>{comment?.userWhoCreatedId ? author : 'Usuario'}</b> {comment?.createdAt ? `el ${getDateStr(comment.createdAt)}, a las ${getHourStr(comment.createdAt)} horas` : ''}</div>

                        {comment?.userWhoUpdatedId ?  <small style={{ color: '#aaa'}}>Modificado por <b>{comment?.userWhoUpdatedId ? modifier : 'Usuario'}</b> {comment?.updatedAt ? `el ${getDateStr(comment.updatedAt)}, a las ${getHourStrUtc(comment.updatedAt)} horas` : ''}</small> : null}
                    </div>
                    {!isEditing && <div className="comment-text">{comment.body}</div>}
                    {isEditing && (
                        <CommentForm
                            submitLabel='Actualizar'
                            hasCancelButton
                            initialText={comment.body}
                            handleSubmit={(text: any) => updateComment(text, comment.id)}
                            handleCancel={() => setActiveComment(null)}
                        />
                    )}
                    {/* <div className='comment-actions'>
                        {canEdit && <button className=`comment-action btn btn-primary btn-sm` onClick={() =>
                            setActiveComment({ id: comment.id, type: 'editing' })}
                        >Editar</button>}
                        {canDelete && <button className='comment-action btn btn-secondary btn-sm' onClick={() => deleteComment(comment.id)}>Eliminar</button>}
                    </div> */}
                    <div className='comment-actions' style={{marginTop: '5px'}}>
                        <button style={{marginRight: '3px'}} className='comment-action btn btn-primary btn-sm' onClick={() =>
                            setActiveComment({ id: comment.id, type: 'editing' })}
                        >Editar</button>
                       <button className='comment-action btn btn-secondary btn-sm' onClick={() => deleteComment(comment.id)}>Eliminar</button>
                </div>
            </div>
        </Col>
        </Row >
    );
}

export default Comment