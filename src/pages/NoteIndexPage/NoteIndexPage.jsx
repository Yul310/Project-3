import NoteList from "../../components/NoteList/NoteList";
import NoteListForm from "../../components/NoteListForm/NoteListForm";
import { Link } from "react-router-dom";
import * as noteAPI from "../../utilities/notes-api";
import { useState, useEffect } from "react";

export default function NoteIndexPage({ allNotes, setAllNotes, setUpdated }) {
  return (
    <>
      <div className="pt-6 flex h-fit">
        <div className="justify-start">
          <div className="px-8 justify-start">
            <h1 className=" font-semibold px-2 text-3xl text-left text-2xl bg-[#f7f7f2] text-lg border-b-[1px] border-black">
              Notes
            </h1>
          </div>

          <div className="flex w-[80vw]">
            <div className="">
              {allNotes ? (
                <NoteList
                  allNotes={allNotes}
                  setAllNotes={setAllNotes}
                  setUpdated={setUpdated}
                />
              ) : (
                "loading"
              )}
            </div>

            <div className="px-10 py-7">
              <NoteListForm />
            </div>
          </div>
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
