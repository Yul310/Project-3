import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";
import { Link } from "react-router-dom";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
// import * as todoAPI from "../../utilities/todos-api";
// import { useState, useEffect } from "react";

export default function TodoIndexPage({
  allTodos,
  setAllTodos,
  setUpdated,
  activeCat,
}) {
  return (
    <>
      <div>
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f]">
          {/* <h1>TodoIndexPage</h1> */}
          {allTodos ? (
            <TodoList
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              setUpdated={setUpdated}
              activeCat={activeCat}
            />
          ) : (
            "loading"
          )}

          {/* <TodoListForm allTodos={allTodos} setAllTodos={setAllTodos}/> */}
        </div>
        {/* // create new todo */}
        <Link to={`/todos/new`}>
          <button className="border-1 border-black bg-black border-t-[1px] rounded text-white text-large px-1 mx-2">
            Create new todo
          </button>
        </Link>
        
      </div>
    </>
  );
}
