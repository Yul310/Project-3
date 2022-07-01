const Todo = require('../../models/todo');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const todos = await Todo.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(todos);
}

async function show(req, res) {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
}
