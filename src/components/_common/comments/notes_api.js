export const getComments = async () => {
    return [
        {
            id: '1',
            body: 'First comment',
            username: 'Fulano',
            userId: '1',
            parentId: null,
            createdAt: '2021-08-16T23:00:33.010+02:00'
        },
        {
            id: '2',
            body: 'Second comment',
            username: 'Mengano',
            userId: '2',
            parentId: null,
            createdAt: '2021-08-17T23:00:33.010+02:00'
        },
        {
            id: '3',
            body: 'Third comment',
            username: 'Sultano',
            userId: '3',
            parentId: null,
            createdAt: '2021-08-18T23:00:33.010+02:00'
        }
    ]
}

export const createComment = async (text, parentId = null) =>{
    return {
        id: Math.random().toString(36).substr(2,9),
        body: text,
        parentId,
        userId: '1',
        username: 'Cristhian',
        createdAt: new Date().toISOString()
    }
}

export const updateComment = async (text) => {
    return { text }
}

export const deleteComment = async () => {
    return {}
}