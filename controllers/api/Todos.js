const Todo = require('../../models/todo');

module.exports = {
  index,
  create
};

// Sorting all the todos by catetory. Might want to change this later -K
async function index(req, res) {
  const todos = await Todo.find({}).sort('name')
  // .populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  // todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(todos);
}

// create new todos
async function create(req, res) {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
}

// async function create(req, res) {
//   try {
//     const user = await User.create(req.body);
//     // token will be a string
//     const token = createJWT(user);
//     // send back the token as a string
//     // which we need to account for 
//     // in the client
//     res.json(token);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// }

// async function create(req, res) {
//   try {
//     const user = await User.create(req.body);


// need to find all todos for a specific user
async function findAllTodos(userId) {
  return await this.find({ user: userId });
}