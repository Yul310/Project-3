require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo');


(async function () {

    await Todo.deleteMany({});
    const todos = await Todo.create([
        { title: 'default 01', sortOrder: 0 },
        { title: 'default 02', sortOrder: 0 }
    ]);

    console.log(todos)

    process.exit();
})();