import { useParams } from "react-router-dom"; //you can import more than one thing at a time
import * as todoAPI from "../../utilities/todos-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function TodoListItem(props) {
  const [allTodos, setAllTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState([]);
  const [formData, setFormData] = useState({
    // add in all the other fields
    title: "",
    date: "",
    time: "",
    description: "",
    urgency: "",
  });

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    //sending new data to backend
    const addTodos = await todoAPI.newTodo(formData);
    // get data again from the backend
    const todos = await todoAPI.getAll();
    return setAllTodos(todos);
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
    // setNewTodo(evt.target.value);
  }

  let { todo } = useParams();

  return (
    <>
      <h5>TodoListItem</h5>
      <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">

    <p>{formData.title}</p>
    <p>{formData.date}</p>
    <p>{formData.urgency}</p>
    <p>{formData.description}</p>


      </div>
    </>
  );
}
