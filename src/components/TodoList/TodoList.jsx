import * as todoAPI from "../../utilities/todos-api";
import TodoListItem from "../TodoListItem/TodoListItem";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    urgency: "",
  });

  // //*** function = Getting Data From Backend  ***//
  // useEffect(function () {
  //   async function getTodos() {
  //     const todos = await todoAPI.getAll();
  //     setAllTodos(todos);
  //     console.log(allTodos);
  //   }
  //   getTodos();
  // }, []);

  // //*** fucntion = creating new category ***//
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   //sending new data to backend
  //   const addTodo = await todoAPI.newTodo(formData);
  //   // get data again from the backend
  //   const todos = await todoAPI.getAll();
  //   return setAllTodos(todos);
  // }

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

  console.log("step 1 of delete function");

  return (
    <>
      <div className="flex-col px-10 flex mt-24 bg-blue-500">
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          <h3>Todo List</h3>
          <TodoListItem />
          <div>
            {allTodos.map((todo, idx) => (
              <>
                <li key={idx} onClick={() => setActiveTodo(todo)}>
                  <Link to={`/todos/${todo.title}`}>{todo.title}</Link>

                  <button
                    type="submit"
                    value={todo._id}
                    // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                    onClick={deleteTodo}
                  >
                    delete
                  </button>
                </li>
              </>
            ))}
            {/* {todos} */}
          </div>
        </div>

        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          {/* // create new todo */}
          <Link to={`/todos/new`}>
            <button className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400">
              Create new todo
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
