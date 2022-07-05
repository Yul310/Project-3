const Category = require('../../models/category');

module.exports = {
    index,
    show
};

async function index(req, res) {

    try {
        const catList = await Category.find({})
        res.json(catList)
    } catch {
        res.status(400).json('Bad Serverside')
    }
 
}

async function show(req, res) {
    const catList = await Category.findById(req.params.id);
    res.json(catList);
}
