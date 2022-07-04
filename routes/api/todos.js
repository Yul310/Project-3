const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/Todos');

// GET /api/todos
router.get('/', todosCtrl.index);
// GET /api/todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;
