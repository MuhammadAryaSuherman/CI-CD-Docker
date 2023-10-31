const express = require('express');
const router = express.Router();
const TodoController = require('../controller/todosController');

router.get('/todos', TodoController.listAll);
router.get('/todos/:id', TodoController.detail);
router.post('/todos', TodoController.create);
router.put('/todos/:id', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

module.exports = router;
