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
      <div className="pt-6 flex">
        <div className="flex flex-col justify-start overflow-y-hidden">
          <div className="px-8 justify-start">
            <h1 className=" font-semibold px-2 text-3xl text-left text-2xl bg-[#f7f7f2] text-lg border-b-[1px] border-black pb-1">
              <i className="fa-solid fa-list-check mt-1.5 text-orange-400"></i>
              &nbsp; To-Do's
            </h1>
          </div>

          <div className="flex h-96 w-[80vw]">
            <div className="">
              {/* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] flex w-[80vw]"> */}
              {/* <h1>TodoIndexPage</h1> */}
              {allTodos ? (
                <TodoList
                  // allTodos={allTodos.filter(
                  //   (todo) => todo.category.title === activeCat
                  // )}
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

            <div className="px-5 py-7">
              <Link to={`/todos/new`}>
                <button className="border-1 border-black bg-black border-t-[1px] rounded text-white text-large px-1 mx-2">
                  Create new todo
                </button>
              </Link>
            </div>
          </div>
          {/* // create new todo */}
        </div>
      </div>
    </>
  );
}
