require('dotenv').config();
require('./config/database');

const Category = require('./models/category');


(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { title: 'default 01', sortOrder: 0 },
        { title: 'default 02', sortOrder: 0 }
    ]);

    console.log(categories)

    process.exit();
})();