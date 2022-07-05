const Category = require('../../models/category');

module.exports = {
  index,
  create,
  deleteCat,
  show
};

async function index(req, res) {
  console.log("reach index")
  try {
    const catList = await Category.find({})
    res.json(catList)
  } catch {
    res.status(400).json('Bad Serverside')
  }

}

async function create(req, res) {
  // console.log(req.body)
  try {
    const newCategory = await Category.create(req.body)
    const catList = await Category.find({})
    catList.push(newCategory)
    await catList.save()
    res.json(catList)
  } catch (e) {
    res.status(400).json(e);
  }
}

async function deleteCat (req, res) {
  // console.log(req.body)
  try {
    const one = await Category.findOneAndRemove({ _Id: req.params.id })
    const catList = await Category.find({})
    await catList.save()
    res.json(catList)
  } catch (e) {
    res.status(400).json(e);
  }
}




async function show(req, res) {
  const catList = await Category.findById(req.params.id);
  res.json(catList);
}
