const Todo = require('../../models/todo');

module.exports = {
  index,
  show
};

// Sorting all the todos by catetory. Might want to change this later -K
async function index(req, res) {
  const todos = await Todo.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(todos);
}

// create new todos
async function createTodo(req, res) {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
}