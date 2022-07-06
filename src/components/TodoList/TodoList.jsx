import * as todoAPI from "../../utilities/todos-api";
import TodoListItem from "../TodoListItem/TodoListItem";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// how to pull data from database?
// import { todos } from "../../data";


export default function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    urgency: "",
  });

  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getTodos() {
      const todos = await todoAPI.getAll();
      setAllTodos(todos);
      //   console.log(allTodos);
    }
    getTodos();
  }, []);

  //*** fucntion = creating new category ***//
  async function deleteTodo(evt) {
    console.log(evt.target.value);
    //sending new data to backend
    // get data again from the backend
    // const todos = await todoAPI.getAll();
    // setAllTodos(todos);
    const todos = allTodos.filter((todo) => todo._id !== evt.target.value);
    console.log(todos);
    setAllTodos(todos);
    const addTodo = await todoAPI.deleteTodo(evt.target.value);
  }

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
    const updatedTodo = { [evt.target.name]: evt.target.value };
    setFormData(updatedTodo);
    console.log(formData);
    // setNewTodo(evt.target.value);
  }

  //*** function = Edit data ***//
  function handleEditing(evt) {
    console.log("edit mode activated");
    setEdit(!edit);
  }

  let viewMode = {}
  let editMode = {}

  if (edit) {
      viewMode.display = "none"
  } else {
      editMode.display = "none"
  }

  console.log("step 1 of delete function");

  return (
    <>
      <div className="flex-col px-10 flex mt-24">
        <div
        // className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]"
        >
          <h3>Todo List</h3>
          {/* <TodoListItem /> */}
          <div>
            <ul
              className="pl-3 text-black flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
              aria-selected="false"
            >
              {allTodos.map((todo, idx, { setEdit }) => (
                <>
                  <li key={idx} onClick={() => setActiveTodo(todo)}>
                    <Link to={`/todos/${todo._id}`} style={viewMode}>{todo.title}
                    </Link>
                    <input type="text" className='textInput' style={editMode} placeholder={todo.title} onChange={handleChange} />
                    <button
                      className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                      onClick={handleEditing}
                    >
                      Edit
                    </button>

                    <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2" type="submit" value={todo._id} style={editMode} onClick={handleEditing}>
                               Save
                            </button>

                    {/* <br></br> */}
                    <button
                      type="submit"
                      value={todo._id}
                      className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                      // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                      onClick={deleteTodo}
                    >
                      delete
                    </button>
                  </li>
                </>
              ))}
              {/* {todos} */}
            </ul>
          </div>
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
    </>
  );
}
