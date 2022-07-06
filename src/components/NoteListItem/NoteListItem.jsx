import * as noteAPI from "../../utilities/notes-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NoteListItem() {
  const [allNotes, setAllNotes] = useState([]);
  const [activeNote, setActiveNote] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    body: "",
  });

  useEffect(function () {
    async function getNotes() {
      const notes = await noteAPI.getAll();
      setAllNotes(notes);
      //   console.log(allCats);
    }
    getNotes();
  }, []);

  //*** fucntion = creating new category ***//
  async function deleteNote(evt) {
    console.log(evt.target.value);
    //sending new data to backend

    // get data again from the backend
    // const cats = await catAPI.getAll();
    const notes = allNotes.filter((note) => note._id !== evt.target.value);
    console.log(notes);
    setAllNotes(notes);
    const addNote = await noteAPI.deleteNote(evt.target.value);
  }

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData);
    // console.log(allCats)
    // updating frontend
    setAllNotes([...allNotes, formData]);
    // sending new data to backend
    noteAPI.newNote(formData);
    setFormData({
      title: "",
      category: "",
      body: "",
    });
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedNote = { [evt.target.name]: evt.target.value };
    setFormData(updatedNote);
    console.log(formData);
    // setNewCat(evt.target.value);
  }

  return (
    <>
      <div className="p-2 rounded-lg">
        <form
          action=""
          className="border-black border-[1px] rounded-md py-4 px-4"
          id="hardshadow"
        >
          <input
            name="title"
            value={formData.title}
            type="text"
            placeholder="Title"
            onChange={handleChange}
            className="bg-[#f7f7f2] text-lg border-b-[1px] border-black outline-0"
          />
          <br />
          <i class="fa-solid fa-tag"></i> &nbsp;
          <input
            name="category"
            value={formData.category}
            type="text"
            placeholder="Category"
            onChange={handleChange}
            className="bg-[#f7f7f2] text-sm outline-0"
          />
          <br />
          <br />
          <input
            name="note"
            value={formData.body}
            type="text"
            placeholder="Write here"
            onChange={handleChange}
            className="bg-[#f7f7f2] outline-0"
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1f1f1f] flex font-light text-sm text-white py-2 px-3 rounded-lg hover:ring hover:ring-orange-400"
          >
            Add New Note{" "}
          </button>
        </form>
      </div>
    </>
  );
}
