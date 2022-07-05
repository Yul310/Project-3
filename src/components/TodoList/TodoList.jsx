import * as todoAPI from "../../utilities/todos-api";
import TodoListItem from "../TodoListItem/TodoListItem";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";



export default function TodoList() {
    const [allTodos, setAllTodos] = useState([]);
    const [activeTodo, setActiveTodo] = useState([]);
    const [formData, setFormData] = useState({
      title: "",
    });
  
    //*** function = Getting Data From Backend  ***//
    useEffect(function () {
      async function getTodos() {
        const todos = await todoAPI.getAll();
        setAllTodos(todos);
        console.log(allTodos);
      }
      getTodos();
    }, []);
    
    
    //*** fucntion = creating new category ***//
    async function handleSubmit(evt) {
      evt.preventDefault();
      //sending new data to backend
      const addTodo = await todoAPI.newTodo(formData);
      // get data again from the backend
      const todos = await todoAPI.getAll();
      return setAllTodos(todos);
    }
    
    
    
    
    
    
    
    
    
    
    console.log("step 1 of delete function")









  return (
    <>
      <div className="flex-col px-10 flex mt-24 bg-blue-500">
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          <h3>Todo List</h3>
          <TodoListItem />
        </div>

        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">


        {/* // create new todo */}
        <button className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400">
          Create new todo
        </button>
      </div>
      </div>
    </>
  );
}
