import * as todoAPI from "../../utilities/todos-api";
import TodoListItem from "../TodoListItem/TodoListItem";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// how to pull data from database?
// import { todos } from "../../data";
// adding something to fix merge conflict

export default function TodoList({
  allTodos,
  activeCat,
  setAllTodos,
  setUpdated,
  updated,
}) {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    urgency: "",
  });

  //*** fucntion = creating new category ***//
  async function deleteTodo(evt) {
    // console.log(evt.target.value);
    const todos = allTodos.filter((todo) => todo._id !== evt.target.value);
    console.log(todos);
    setAllTodos(todos);
    setUpdated(!updated);
    await todoAPI.deleteTodo(evt.target.value);
  }

  // *** fucntion = editing a category ***//
  async function editTodo(evt) {
    console.log(evt.target.value);

    // FrontEnd updating
    const todos = allTodos.filter((todo) => todo._id === evt.target.value);
    console.log(todos);
    // todos[0].title = formData.title
    // setEdit(!edit)
    // console.log(cats[0].title);
    // console.log(formData)

    //Backend updating
    todoAPI.editTodo(evt.target.value, formData);
    // setFormData({
    //   title: ""
    // })
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
    // setNewTodo(evt.target.value);
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

  //Pick and Choose //filtering
  const allTodosG = allTodos.filter(
    (todo) => todo.category.title === activeCat
  );

  if (activeCat) {
    allTodos = allTodosG;
  } else {
    allTodos = allTodos;
  }

  return (
    <>
      <div className="flex h-screen overflow-y-auto">
        {allTodos ? (
          <div className="flex flex-col px-10 py-4">
            <div className="text-black flex flex-col-reverse justify-items-start order-last border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] font-extralight">
              {allTodos.map((todo, idx, { setEdit }) => (
                <>
                  <div
                    key={idx}
                    className="border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3 w-[24.5rem] text-left"
                    id="hardshadow"
                  >
                    <p className="border-black border-b-[1px] text-lg">
                      <Link to={`/todos/${todo._id}`} style={viewMode}>
                        {todo.title}
                      </Link>
                    </p>
                    <a className="">
                      <i class="fa-solid fa-triangle-exclamation mt-1.5 text-orange-500"></i>
                      &nbsp;
                      <a className="pt-1 pb-2 text-sm">
                        <a className="font-semibold">Urgency:</a> {todo.urgency}
                      </a>
                    </a>

                    <p className="pt-3 pb-4"> {todo.description}</p>
                    {/* <input 
                        type="text" 
                        className='textInput' 
                        style={editMode} 
                        placeholder={todo.title} 
                        onChange={handleChange} 
                      /> */}

                    {/* 
                      <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2" type="submit" value={todo._id} style={editMode} onClick={editTodo}>
                        Save
                      </button> */}

                    {/* <br></br> */}
                    <button
                      type="submit"
                      value={todo._id}
                      className="bg-[#1f1f1f] flex items-end font-light text-sm text-white py-1.5 px-3 rounded-lg hover:ring hover:ring-orange-400"
                      // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                      onClick={deleteTodo}
                    >
                      Delete
                    </button>
                  </div>
                </>
              ))}
              {/* <button
                  className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2"
                  onClick={handleEditing}
                >
                  Edit
                </button> */}
              {/* {todos} */}
            </div>

            {/* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          // create new todo
          <Link to={`/todos/new`}>
            <button className="border-1 border-black bg-black  rounded text-white text-medium px-1 mx-2">
              Create new todo
            </button>
          </Link>
        </div> */}
          </div>
        ) : (
          <h5>loading</h5>
        )}
      </div>
    </>
  );
}
