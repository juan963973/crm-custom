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

// export const createComment = async (text, parentId = null) => {
//     return {
//         id: Math.random().toString(36).substr(2, 9),
//         body: text,
//         parentId,
//         userId: '2',
//         username: 'Usuario',
//         createdAt: new Date().toISOString()
//     }
// }

// export const createComment = async (text) => {
//     return {
//         body: text
//     }
// }

export const updateComment = async (text) => {
    return { text }
}

export const deleteComment = async () => {
    return {}
}
import axios from "axios";
import React from "react";

const baseURL = "https://localhost:5001/v1/api/Notes/Case";
const baseURL2 = "https://localhost:5001/v1/api/Notes";
const baseURL3 = "https://localhost:5001/v1/api/Cases/2/details";

export function addNote(text) {
    axios
        .post(baseURL, {
            body: text,
            "moduleId": 2
        })
        .then((response) => {
            console.log(response.data);
        });
}

export function updateNote(text, Id) {
    console.log(`${baseURL2}/${Id})`)
    axios
        .put(`${baseURL2}/${Id}`, {
            Body: text
        })
        .then((response) => {
            console.log(response.data);
        });
}

export function throwNote(Id) {
    console.log(`${baseURL2}/${Id})`)
    axios
        .delete(`${baseURL2}/${Id}`)
        .then(() => {
            alert("Post deleted!");
        });
}

export function getNotes() {
    const [post, setPost] = React.useState(null);
    let value

    React.useEffect(() => {
        axios.get(baseURL3).then((response) => {
            // console.log('kk*******************')
            // console.log(response.data.notes)
            // console.log('kk*******************')
            // setPost(response.data);
        });
    }, []);
    return(
        value
    )

}

// export const getNotess = async () =>{
//         const [post, setPost] = React.useState(null);
//     let value

//     React.useEffect(() => {
//         axios.get(baseURL3).then((response) => {
//             console.log('kk*******************')
//             console.log(response.data.notes)
//             value = response.data.notes
//             console.log('kk*******************')
//             setPost(response.data);
//         });
//     }, []);
//     return(
//         value
//     )
// }