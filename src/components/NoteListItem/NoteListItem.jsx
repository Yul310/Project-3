import * as noteAPI from "../../utilities/notes-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NoteListItem() {
  const [allNotes, setAllNotes] = useState([]);
  const [activeNote, setActiveNote] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
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
    // setAllCats(cats);
    const notes = allNotes.filter((note) => note._id !== evt.target.value);
    console.log(notes);
    setAllNotes(notes);
    const addNote = await noteAPI.deleteNote(evt.target.value);
  }

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    //sending new data to backend
    const addNote = await noteAPI.newNote(formData);
    // get data again from the backend
    const notes = await noteAPI.getAll();
    return setAllNotes(notes);
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
      <h5>NoteListItem</h5>
      <br />
      <form action="">
        <input
          name="title"
          value={formData.title}
          type="text"
          placeholder="Note Title"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="Category"
          value={formData.category}
          type="text"
          placeholder="Category"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="Note"
          value={formData.body}
          type="text"
          placeholder="Begin writing note"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add New Note{" "}
        </button>
      </form>
    </>
  );
}
