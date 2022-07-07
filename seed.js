require('dotenv').config();
require('./config/database');

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

    console.log(categories)

    process.exit();
})();