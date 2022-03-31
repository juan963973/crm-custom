import CommentForm from './commentForm'

const Comment = ({
    comment,
    currentUserId,
    updateComment,
    deleteComment,
    activeComment,
    setActiveComment
}: any) => {
    // const fiveMinutes = 300000
    // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.userId
    const canDelete = currentUserId === comment.userId
    const createdAt = new Date(comment.createdAt).toLocaleDateString()
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id ===comment.id
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src='' />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                { !isEditing && <div className="comment-text">{comment.body}</div> }
                { isEditing && (
                    <CommentForm
                    submitLabel='Update'
                    hasCancelButton
                    initialText={comment.body}
                    handleSubmit={(text: any) => updateComment(text, comment.id)}
                    handleCancel={() => setActiveComment(null)}
                    />
                )}
                <div className='comment-actions'>
                    {canEdit && <button className='comment-action btn btn-primary' onClick={() =>
                        setActiveComment({id: comment.id, type: 'editing'})} 
                        >Editar</button>}
                    {canDelete && <button className='comment-action btn btn-danger' onClick={() => deleteComment(comment.id)}>Eliminar</button>}
                </div>
            </div>
        </div>
    );
}

export default Comment