const express = require('express');
const router = express.Router();
const catCtrl = require('../../controllers/api/categories');

// GET /api/categories////
router.get('/', catCtrl.index);
// GET /api/categories/:id
router.get('/:id', catCtrl.show);

module.exports = router;
