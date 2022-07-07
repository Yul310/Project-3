import NoteListItem from "../NoteListForm/NoteListForm";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as noteAPI from "../../utilities/notes-api";

export default function NoteList() {
  const [allNotes, setAllNotes] = useState([]);
  const [activeNote, setActiveNote] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    body: "",
  });

  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getNotes() {
      const notes = await noteAPI.getAll();
      setAllNotes(notes);
      console.log(allNotes)
    }
    getNotes();
  }, []);

  //*** fucntion = creating new category ***//
  async function deleteNote(evt) {
    console.log(evt.target.value);
    //sending new data to backend
    // get data again from the backend
    const notes = allNotes.filter((note) => note._id !== evt.target.value);
    console.log(notes);
    setAllNotes(notes);
    const addNote = await noteAPI.deleteNote(evt.target.value);
  }

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    //sending new data to backend
    const addNotes = await noteAPI.newNote(formData);
    // get data again from the backend
    const notes = await noteAPI.getAll();
    return setAllNotes(notes);
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedNote = { [evt.target.name]: evt.target.value };
    setFormData(updatedNote);
    console.log(formData);
  }

  //*** function = Edit data ***//
  function handleEditing(evt) {
    console.log("edit mode activated");
    setEdit(!edit);
  }

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <div>
        <h3>Note List</h3>
        <NoteListItem />
        <ul>
          
          {allNotes.map((note, idx) => (   
            <li key={idx} onClick={() => setActiveNote(note)}>
              <Link to={`/notes/${note.title}`} style={viewMode}>
                {note.title}
              </Link>
              <input
                type="text"
                className="textInput"
                style={editMode}
                placeholder={note.title}
                onChange={handleChange}
              />
              <button
                className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                onClick={handleEditing}
              >
                Edit
              </button>

              <button
                className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                type="submit"
                value={note._id}
                style={editMode}
                onClick={handleEditing}
              >
                Save
              </button>

              {/* <br></br> */}
              <button
                type="submit"
                value={note._id}
                className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                // do we want the note to be deleted when the button is clicked? Like marking it complete... -K
                onClick={deleteNote}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
