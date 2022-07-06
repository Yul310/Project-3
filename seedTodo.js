require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo');


(async function () {

    await Todo.deleteMany({});
    const todos = await Todo.create([
  
        {
            title: 'never todo',
            date: '2022-05-01',
            time: '12:00',
            sortOrder: 0,
            description: "this is a tester",
            urgency: 'low',
        },
        {
            title: 'silly willy 20',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            description: "this is a test",
            urgency: 'low',
        },
        {
            title: 'kiera forrest 21',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            description: "this is a NOT a test",
            urgency: 'high',
        },
        {
            title: 'james bond 22',
            date: '2020-01-01',
            time: '12:00',
            sortOrder: 0,
            description: "this is stupid",
            urgency: 'low',
        },

    ]);

    console.log(todos)

    process.exit();
})();