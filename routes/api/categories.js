const express = require("express");
const router = express.Router();
const catCtrl = require("../../controllers/api/categories");

// GET /api/categories
router.get("/", catCtrl.index);
// POST /api/categories
router.post("/newCat", catCtrl.create);
// POST /api/categories
router.put("/editCat/:id", catCtrl.editCat);
// DELETE /api/categories/:id
router.delete("/deleteCat/:id", catCtrl.deleteCat);

module.exports = router;
