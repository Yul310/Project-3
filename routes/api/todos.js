const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/Todos');

// GET /api/todos
router.get('/todos', todosCtrl.index);
// GET /api/todos/:id
router.get('/todos/:id', todosCtrl.show);

module.exports = router;
