import * as noteAPI from "../../utilities/notes-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NoteListItem() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    //sending new data to backend
    const addCat = await noteAPI.newCat(formData);
    // get data again from the backend
    const cats = await noteAPI.getAll();
    // return setAllCats(cats);
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedCat = { [evt.target.name]: evt.target.value };
    setFormData(updatedCat);
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
