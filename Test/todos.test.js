const request = require('supertest');
const app = require('../app'); // path ke file app.js Anda

describe('TodoController', () => {
    it('should return a list of todos', async () => {
        const res = await request(app)
            .get('/todos') // ganti dengan path yang sesuai
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body).toBeInstanceOf(Array);
    });

    it('should return a todo detail', async () => {
        const res = await request(app)
            .get('/todos/1') // ganti dengan id yang valid
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('title');
    });

    it('should create a todo', async () => {
        const res = await request(app)
            .post('/todos')
            .send({
                title: 'Test Todo',
                fullName: 'Test User',
                email: 'test@example.com',
                password: 'testpassword',
                gender: 'Male'
            })
            .expect('Content-Type', /json/)
            .expect(200);
    
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Test Todo');
        expect(res.body.fullName).toBe('Test User');
        expect(res.body.email).toBe('test@example.com');
        expect(res.body.gender).toBe('Male');
    });
    

    it('should update a todo', async () => {
        const res = await request(app)
            .put('/todos/1') // ganti dengan id yang valid
            .send({
                title: 'Programmer Junior'
            })
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body.title).toBe('Programmer Junior');
    });

    it('should delete a todo', async () => {
        const res = await request(app)
            .delete('/todos/2') // ganti dengan id yang valid
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body.message).toBe('Todo deleted');
    });
});
