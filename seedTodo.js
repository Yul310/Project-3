require('dotenv').config();
require('./config/database');

const Todo = require('./models/todo');
const Note = require("./models/note");
const Category = require('./models/category');


(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { title: 'GA Assignment', sortOrder: 0 },
        { title: 'Interview', sortOrder: 0 },
        { title: 'Workout', sortOrder: 0 },
        { title: 'Tennis', sortOrder: 0 },
        { title: 'Shopping', sortOrder: 0 },
        { title: 'Grocery', sortOrder: 0 }
    ]);





    await Todo.deleteMany({});
    const todos = await Todo.create([
  
        {
            title: 'GA Group Project',
            date: '2022-07-11T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "ClearSigt!",
            urgency: 'high',
            category:categories[0]
        },
        {
            title: 'python study',
            date: '2022-07-14T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "react, js, mongosh.... too many ...",
            urgency: 'high',
            category:categories[0]
        },
        {
            title: 'Google Interview',
            date: '2022-07-15T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "Google Interview/ salary? working from home? ",
            urgency: 'medium',
            category:categories[1]
        },
        {
            title: 'Netflix Interview',
            date: '2022-07-14T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "firt interview! leetcode, everyday!",
            urgency: 'low',
            category:categories[1]
        },
        {
            title: 'Tennis Match',
            date: '2022-07-013T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "don't be late",
            urgency: 'high',
            category:categories[3]
        },
        {
            title: 'Tennis Class',
            date: '2022-07-017T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "dont forget to bring your shoes",
            urgency: 'high',
            category:categories[3]
        }
        ,
        {
            title: 'Personal training',
            date: '2022-07-012T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "summer is comming.....",
            urgency: 'low',
            category:categories[2]
        }
        ,
        {
            title: 'trader joes',
            date: '2022-07-011T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "milk, eggs, bread, butter",
            urgency: 'high',
            category:categories[5]
        }
        ,
        {
            title: 'New Glasses',
            date: '2022-07-013T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "clear glasses!",
            urgency: 'high',
            category:categories[4]
        }
        ,
        {
            title: 'training shorts',
            date: '2022-07-013T00:00:00.000Z',
            // time: '12:00',
            sortOrder: 0,
            description: "inner shorts in blue!",
            urgency: 'high',
            category:categories[4]
        }


    ]);


    await Note.deleteMany({});
    const notes = await Note.create([
      {
        title: "Flat Earth",
        category: "Conspiracy Theories",
        body: "It's not a conspiracy theory. It's a flat earth theory.",
      },
      {
        title: "9/11 was an outside job.",
        category: "Conspiracy Theories",
        body: "Gardening.",
      },
      {
        title: "Beets",
        category: "Schrute Farms",
        body: "Buy more.",
      },
      {
        title: "Coke",
        category: "Soda",
        body: "Yum.",
      },
    ]);


    console.log(todos)

    process.exit();
})();