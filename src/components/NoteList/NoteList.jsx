import NoteListItem from "../NoteListForm/NoteListForm";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as noteAPI from "../../utilities/notes-api";
import { InlineWidget } from "react-calendly";

export default function NoteList({ allNotes, setAllNotes }) {
  // const [allNotes, setAllNotes] = useState([]);
  // const [activeNote, setActiveNote] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    body: "",
  });

  // not sure if this is needed anymore
  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getNotes() {
      const notes = await noteAPI.getAll();
      setAllNotes(notes);
      console.log(allNotes);
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
    await noteAPI.deleteNote(evt.target.value);
    // const addNote = await noteAPI.deleteNote(evt.target.value);
  }

  // *** fucntion = editing a category ***//
  async function editNote(evt) {
    console.log(evt.target.value);

    // FrontEnd updating
    const notes = allNotes.filter((note) => note._id === evt.target.value);
    // notes[0].title = formData.title;
    // setEdit(!edit);
    // console.log(cats[0].title);
    // console.log(formData)

    //Backend updating
    noteAPI.editNote(evt.target.value, formData);
    setFormData({
      title: "",
      category: "",
      body: "",
    });
  }

  // //*** fucntion = creating new category ***//
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   //sending new data to backend
  //   const addNotes = await noteAPI.newNote(formData);
  //   // get data again from the backend
  //   const notes = await noteAPI.getAll();
  //   return setAllNotes(notes);
  // }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedNote = { ...formData, [evt.target.name]: evt.target.value };
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
      <div className="flex">
        <div>
          {allNotes ? (
            <div className="flex-col px-10 flex mt-24">
              <NoteListItem />
              <ul
                className="pl-3 text-black flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false"
              >
                {allNotes.map((note, idx, { setEdit }) => (
                  <>
                    <li
                      key={idx}
                      // don't have this in todoList
                      // onClick={() => setActiveNote(note)}
                    >
                      <Link to={`/notes/${note._id}`} style={viewMode}>
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
                        onClick={editNote}
                        type="submit"
                        style={editMode}
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
                        style={editMode}
                        onClick={deleteNote}
                      >
                        delete
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          ) : (
            <h5>loading</h5>
          )}
        </div>
        {/* <div className="App px-4">
          <InlineWidget url="https://calendly.com/earl-halasan?background_color=f7f7f2&primary_color=fb923c" />
        </div> */}
      </div>
    </>
  );
}
