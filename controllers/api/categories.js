const Category = require('../../models/category');

module.exports = {
    index,
    create,
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

async function create(req, res) {
    try {
      console.log("reach create")
      const category = await Category.create(req.body);
      // token will be a string
   
      res.json(category);
    } catch (e) {
      res.status(400).json(e);
    }
  }
  



async function show(req, res) {
    const catList = await Category.findById(req.params.id);
    res.json(catList);
}
