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

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: '2',
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
import axios from "axios";
import React from "react";

const baseURL = "https://localhost:5001/v1/api/Notes/Case";
const baseURL2 = "https://localhost:5001/v1/api/Notes";
// export default function addNote(text) {
//     axios
//     .post(baseURL, {
//       body: text,
//       "moduleId": 2
//     })
//     .then((response) => {
//       console.log(response.data);
//     });
// }

// export default function updateNote() {
//     axios
//         .put(`${baseURL2}/22`, {
//             Body: "This is an updated post by Cris."
//         })
//         .then((response) => {
//             console.log(response.data);
//         });
// }

// export default function throwNote() {
//     axios
//         .delete(`${baseURL2}/22`)
//         .then(() => {
//             alert("Post deleted!");
//             setPost(null)
//         });
// }
