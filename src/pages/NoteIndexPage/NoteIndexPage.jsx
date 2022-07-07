import NoteList from "../../components/NoteList/NoteList";
import NoteListForm from "../../components/NoteListForm/NoteListForm";
import { Link } from "react-router-dom";
import * as noteAPI from "../../utilities/notes-api";
import { useState, useEffect } from "react";

export default function NoteIndexPage({allNotes, setAllNotes,setUpdated}) {
  return (
    <>
      <div>
        <div>
          <h1>Notes test</h1>
        {allNotes?
        <NoteList allNotes={allNotes} setAllNotes={setAllNotes} setUpdated={setUpdated}/>:"loading"
      }
        </div>
        {/* do we want new note button on note landing page? -K */}
        {/* <Link to={`/notes/new`}>
          <button className="border-1 border-black bg-black  rounded text-white text-medium px-1 mx-2">
            Create new todo
          </button>
        </Link> */}
        {/* <NoteList /> */}
      </div>
    </>
  );
}
