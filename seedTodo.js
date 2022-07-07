require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo');




const Category = require('./models/category');


(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { title: 'GA SEI', sortOrder: 0 },
        { title: 'workout', sortOrder: 0 },
        { title: 'tennis', sortOrder: 0 },
        { title: 'shopping', sortOrder: 0 },
        { title: 'grocery', sortOrder: 0 }
    ]);





    await Todo.deleteMany({});
    const todos = await Todo.create([
  
        {
            title: 'never todo',
            date: '2022-07-07T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "this is a tester",
            urgency: 'low',
            category:categories[0]
        },
        {
            title: 'silly willy 20',
            date: '2022-07-07T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "this is a test",
            urgency: 'low',
            category:categories[1]
        },
        {
            title: 'kiera forrest 21',
            date: '2022-07-07T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "this is a NOT a test",
            urgency: 'high',
            category:categories[0]
        },
        {
            title: 'james bond 22',
            date: '2022-07-07T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "this is stupid",
            urgency: 'low',
            category:categories[1]
        },

    ]);

    console.log(todos)

    process.exit();
})();