// import axios from 'axios';
const axios = require('axios');
const URL = 'https://jsonplaceholder.typicode.com';
const USERS = '/users';
const PHOTOS = '/photos';
const COMMENTS = '/comments'
const TODOS = '/todos';
const POSTS = '/posts';
const user = {
    "id": 10,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}


test("GET All Users", async () => {
    let responseUsers = await axios.get(`${URL}${USERS}`);
    expect(responseUsers.status).toBe(200);

})

test("POST User", async () => {
    let responseUser = await axios.post(`${URL}${POSTS}`, {
        params: { user }
    });
    expect(responseUser.status).toBe(201);
})

test("GET Photos by albumID and ID", async () => {
    let responsePhotos = await axios.get(`${URL}${PHOTOS}`, { params: { albumId: 2, id: 52 } });
    expect(responsePhotos.data[0].albumId).toBe(2);
    expect(responsePhotos.data[0].id).toBe(52);
    expect(responsePhotos.data[0].title).toContain("eveniet pariatur quia nobis reiciendis laboriosam ea");
})


test("POST Photos", async () => {
    let responsePhotos = await axios.post(`${URL}${POSTS}`, {
        params: {
            "albumId": 12,
            "id": 151,
            "title": "test photot",
            "url": "https://via.placeholder.com/600/8e973b",
            "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
        }
    });
    expect(responsePhotos.status).toBe(201);
})


test("GET Comments by id", async () => {
    let responseComments = await axios.get(`${URL}${COMMENTS}`, { params: { id: 1 } });
    expect(responseComments.data[0].id).toBe(1);
})


test("POST Comments", async () => {
    let responseComments = await axios.post(`${URL}${POSTS}`, {
        params: {
            "postId": 100,
            "id": 25,
            "name": "Test",
            "email": "test@gmail.com",
            "body": " Original text"
        }
    });
    expect(responseComments.status).toBe(201);
})

test("GET Posts by Userid", async () => {
    let responsePosts = await axios.get(`${URL}${POSTS}`, { params: { userId: 1 } });
    for (let post of responsePosts.data) {
        expect(post.userId).toBe(1);
    }
})

test("POST Posts", async () => {
    let responsePost = await axios.post(`${URL}${POSTS}`, {
        params: {
            "userId": 18,
            "id": 205,
            "title": "Test Post",
            "body": "Monday"
        }
    });
    expect(responsePost.status).toBe(201);
})

test("GET completed Todos", async () => {
    let responseTodos = await axios.get(`${URL}${TODOS}`, { params: { completed: true } });
    for (let todos of responseTodos.data) {
        expect(todos.completed).toBeTruthy();
    }
})


test("POST Todos", async () => {
    let responseTodos = await axios.post(`${URL}${TODOS}`, {
        params: {
            "userId": 8,
            "id": 25,
            "title": "test Todos",
            "body": "Tuesday"
        }
    });
    expect(responseTodos.status).toBe(201);
})
