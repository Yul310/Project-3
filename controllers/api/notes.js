// const Category = require("../../models/note");

// module.exports = {
//   index,
//   create,
//   deleteNote,
//   show,
// };

// async function index(req, res) {
//   try {
//     const noteList = await Note.find({});
//     res.json(noteList);
//   } catch {
//     res.status(400).json("Bad Serverside");
//   }
// }

// async function create(req, res) {
//   // console.log(req.body)
//   try {
//     const newNote = await Note.create(req.body);
//     const noteList = await Note.find({});
//     noteList.push(newNote);
//     await noteList.save();
//     console.log(noteList);
//     // res.json()
//     response.json();
//   } catch (e) {
//     res.status(400).json(e);
//   }
// }

// async function deleteNote(req, res) {
//   // console.log(req.body)
//   try {
//     console.log(req.params.id);
//     // const one = await Category.findById(req.params.id)
//     const one = await Note.findByIdAndDelete(req.params.id);
//     // const one = await Category.findOneAndRemove({ _Id: req.params.id } )
//     // const catList = await Category.find({})
//     // await catList.save()
//     // res.json(catList)
//   } catch (e) {
//     res.status(400).json(e);
//   }
// }

// async function show(req, res) {
//   const noteList = await Note.findById(req.params.id);
//   res.json(noteList);
// }
