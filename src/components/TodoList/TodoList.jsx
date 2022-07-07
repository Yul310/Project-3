import * as todoAPI from "../../utilities/todos-api";
import TodoListItem from "../TodoListItem/TodoListItem";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// how to pull data from database?
// import { todos } from "../../data";


export default function TodoList({allTodos, setAllTodos}) {

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
    console.log(evt.target.value);
    const todos = allTodos.filter((todo) => todo._id !== evt.target.value);
    // console.log(todos);
    setAllTodos(todos);
    await todoAPI.deleteTodo(evt.target.value);
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
    {allTodos?
      <div className="flex-col px-10 flex mt-15">
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2"
        // className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]"
        >
          <h3>Todo List</h3>
          {/* <TodoListItem /> */}
          
          <div>

            <ul
              className="pl-3 text-black flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight "
              aria-selected="false"
            >
              {allTodos.map((todo, idx, { setEdit }) => (
                <>
                  <li key={idx} className="border-black border-[1px] rounded-md py-3 px-4 my-4 font-light"
          id="hardshadow">
                    <Link to={`/todos/${todo._id}`} style={viewMode}>{todo.title}
                    </Link>
                    <input type="text" className='textInput text-left' style={editMode} placeholder={todo.title} onChange={handleChange} />
                    <div className="text-justify ">
                    <button
                      className="border-1 border-black bg-[#7b7e63]  rounded text-white text-right text-sm px-1 mx-2"
                      onClick={handleEditing}
                    >
                      Edit
                    </button>

                    <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-right text-sm px-1 mx-2" type="submit" value={todo._id} style={editMode} onClick={handleEditing}>
                               Save
                            </button>

                    {/* <br></br> */}
                    <button
                      type="submit"
                      value={todo._id}
                      className="border-1 border-black bg-[#7b7e63]  rounded text-right text-white text-sm px-1 mx-2"
                      // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                      onClick={deleteTodo}
                    >
                      delete
                    </button>
                    </div>
                  </li>
                </>
              ))}
              {/* {todos} */}
            </ul>
          </div>
        </div>
{/* // i think we can delete the code below -K */}
        {/* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          // create new todo
          <Link to={`/todos/new`}>
            <button className="border-1 border-black bg-black  rounded text-white text-medium px-1 mx-2">
              Create new todo
            </button>
          </Link>
        </div> */}
      </div>
      :<h5>loading</h5>}
    </>
  );
}
