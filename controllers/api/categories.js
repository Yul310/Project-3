const Category = require("../../models/category");

module.exports = {
  index,
  create,
  deleteCat,
  editCat,
  show,
};

async function index(req, res) {
  try {
    const catList = await Category.find({});
    res.json(catList);
  } catch {
    res.status(400).json("Bad Serverside");
  }
}

async function create(req, res) {
  // console.log(req.body)
  try {
    const newCategory = await Category.create(req.body)
    const catList = await Category.find({})
    catList.push(newCategory)
    await catList.save()
    
  } catch (e) {
    res.status(400).json(e);
  }
}

async function deleteCat(req, res) {
  // console.log(req.body)
  try {
    console.log(req.params.id);
    // const one = await Category.findById(req.params.id)
    const one = await Category.findByIdAndDelete(req.params.id);
    // const one = await Category.findOneAndRemove({ _Id: req.params.id } )
    // const catList = await Category.find({})
    // await catList.save()
    // res.json(catList)
  } catch (e) {
    res.status(400).json(e);
  }
}

async function editCat(req, res) {
  const catList = await Category.findByIdAndUpdate({_id:req.params.id},{title:req.body.title});
  console.log(catList)
  // catList.title = req.body.title;
  // console.log(catList)
  // console.log(req.body)
  // res.json(catList);
}


async function show(req, res) {
  console.log("show")
  const catList = await Category.findById(req.params.id);
  res.json(catList);
}
