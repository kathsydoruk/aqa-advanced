const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

//reusable axios instance
const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

//asserts to check that objects match the minimal contract
const expectPostResponse = (obj) =>
    expect(obj).toEqual(
        expect.objectContaining({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
        })
    );

const expectUserResponse = (obj) =>
    expect(obj).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            username: expect.any(String),
            email: expect.any(String),
            address: expect.objectContaining({
                street: expect.any(String),
                suite: expect.any(String),
                city: expect.any(String),
                zipcode: expect.any(String),
                geo: expect.objectContaining({
                    lat: expect.any(String),
                    lng: expect.any(String),
                }),
            }),
            phone: expect.any(String),
            website: expect.any(String),
            company: expect.objectContaining({
                name: expect.any(String),
                catchPhrase: expect.any(String),
                bs: expect.any(String),
            }),
        })
    );

const expectCommentResponse = (obj) =>
    expect(obj).toEqual(
        expect.objectContaining({
            postId: expect.any(Number),
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            body: expect.any(String),
        })
    );

describe('Lesson 14 API checks examples', () => {
    test('GET /posts/1 returns a single post with correct response', async () => {
        const result = await api.get('/posts/1');
        expect(result.status).toBe(200);
        expectPostResponse(result.data);
        expect(result.data.id).toBe(1);
    });

    test('GET /users returns a non-empty array of users with valid response', async () => {
        const result = await api.get('/users');
        expect(result.status).toBe(200);
        expect(Array.isArray(result.data)).toBe(true);
        expect(result.data.length).toBeGreaterThan(0);
        result.data.forEach(expectUserResponse);
    });

    test('GET /comments filtered by postId returns only matching comments', async () => {
        const targetPostId = 1;
        const result = await api.get('/comments', {
            params: { postId: targetPostId },
        });
        expect(result.status).toBe(200);
        expect(Array.isArray(result.data)).toBe(true);
        result.data.forEach((comment) => {
            expectCommentResponse(comment);
            expect(comment.postId).toBe(targetPostId);
        });
    });

    test('POST /posts creates a post and verifies its structure', async () => {
        const payload = {
            title: 'Test Post',
            body: 'This is a test post.',
            userId: 10,
        };

        const result = await api.post('/posts', payload);
        expect(result.status).toBe(201);
        expect(result.data).toEqual(expect.objectContaining(payload));
        expectPostResponse(result.data);
    });

    test('POST /comments creates a comment and verifies its structure', async () => {
        const payload = {
            postId: 1,
            name: 'QA Tester',
            email: 'qa@example.com',
            body: 'Automated comment test.',
        };

        const result = await api.post('/comments', payload);

        expect(result.status).toBe(201);
        expect(result.data).toEqual(expect.objectContaining(payload));
        expectCommentResponse(result.data);
    });
});
