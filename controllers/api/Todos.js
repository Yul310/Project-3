const Todo = require('../../models/todo');
const Category = require("../../models/category");


module.exports = {
  index,
  create,
  findAllTodos,
  deleteTodo,
  editTodo,
  show
};

// Sorting all the todos by catetory. Might want to change this later -K
async function index(req, res) {
  try {
    
  const todoList = await Todo.find({}).populate('category').exec();
  // .populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  // todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(todoList);
  } catch {
    res.status(400).json('Bad Serverside')
  }
}



// create new todos
async function create(req, res) {
  // console.log(req.body) // this is the body of the request
  try {

// const one = Category.findOne({title:req.body.category})
// console.log(one)

  const newTodo = await Todo.create(req.body);
  const todoList = await Todo.find({});
  todoList.push(newTodo)
  //.then((todoList) => {console.log(todoList)})
  await todoList.save();
  console.log(todoList);
  //res.json(todoList);
  response.json();
  } catch (e) {
    res.status(400).json(e)
  }
}


// need to find all todos for a specific user - this might not be necessary -K
async function findAllTodos(userId) {
  return await this.find({ user: userId });
}

// to delete a todo
async function deleteTodo (req, res) {
  // console.log(req.body)
  console.log("step 3 delete")

  try {
    console.log(req.params.id)
    const one = await Todo.findByIdAndDelete(req.params.id)
    // const todoList = await Todo.find({})
    // await todoList.save()
    // res.json(todoList)
  } catch (e) {
    res.status(400).json(e);
  }
}

// to edit a todo
async function editTodo(req, res) {
  const todoList = await Todo.findByIdAndUpdate({_id:req.params.id},{title:req.body.title});
  console.log(todoList)
}

async function show(req, res) {
  console.log("req.params.id")
  const todoList = await Todo.findById(req.params.id);
  res.json(todoList);
}