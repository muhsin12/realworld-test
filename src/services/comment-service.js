export function getComments(){
    return  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json());
}

export function getCommentDetails(id) {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(data => data.json());
}