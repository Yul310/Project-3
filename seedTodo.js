require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo');


(async function () {

    await Todo.deleteMany({});
    const todos = await Todo.create([
  
        {
            title: 'today todo',
            date: '2022-05-01',
            time: '12:00',
            sortOrder: 0,
            urgency: 'low',
        },
        {
            title: 'default 20',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            urgency: 'low',
        },
        {
            title: 'default 21',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            urgency: 'low',
        },
        {
            title: 'default 22',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            urgency: 'low',
        },

    ]);

    console.log(todos)

    process.exit();
})();