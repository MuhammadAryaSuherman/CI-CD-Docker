const { Todo } = require('../models');

class TodoController {
    static async listAll(req, res) {
        const todos = await Todo.findAll();
        res.json(todos);
    }

    static async detail(req, res) {
        const todo = await Todo.findByPk(req.params.id);
        res.json(todo);
    }

    static async create(req, res) {
        const todo = await Todo.create(req.body);
        res.json(todo);
    }

    static async update(req, res) {
        const todo = await Todo.findByPk(req.params.id);
        await todo.update(req.body);
        res.json(todo);
    }

    static async delete(req, res) {
        const todo = await Todo.findByPk(req.params.id);
        await todo.destroy();
        res.json({ message: 'Todo deleted' });
    }
}

module.exports = TodoController;
