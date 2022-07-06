require("dotenv").config();
require("./config/database");

const Note = require("./models/note");

(async function () {
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

  console.log(notes);

  process.exit();
})();
