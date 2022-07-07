import "./App.css";
import { useState, useEffect } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NoteIndexPage from "../NoteIndexPage/NoteIndexPage";
import TodoIndexPage from "../TodoIndexPage/TodoIndexPage";
import TodoNewPage from "../TodoNewPage/TodoNewPage";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import CategoryIndexPage from "../CategoryIndexPage/CategoryIndexPage";
import HomePage from "../HomePage/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import * as todoAPI from "../../utilities/todos-api";
import * as catAPI from "../../utilities/categories-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allTodos, setAllTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [allCats, setAllCats] = useState([])

  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getTodos() {
      const todos = await todoAPI.getAll();
      setAllTodos(todos);
      //   console.log(allTodos);

    }
    getTodos();
  }, [updated]);

  useEffect(function () {
    async function getCats() {
      const cats = await catAPI.getAll();
      setAllCats(cats);
      //   console.log(allCats);
    }
    getCats();
  }, [updated]);

  return (
    <main>
      {user ? (
        <>
          <div className="App flex flex-row">
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/notes" element={<NoteIndexPage />} />
              {allTodos ?
                <Route path="/todos" element={<TodoIndexPage allTodos={allTodos} setAllTodos={setAllTodos} />} />
                : "loading"}
              <Route path="/todos/new" element={<TodoNewPage allTodos={allTodos} setAllTodos={setAllTodos} setUpdated={setUpdated} allCats={allCats} />} />
              <Route path="/todos/:id" element={<TodoListItem allTodos={allTodos} />} />
              <Route path="/categories" element={<CategoryIndexPage allCats={allCats} setAllCats={setAllCats} setUpdated={setUpdated}/>} />
              <Route path="/" element={<HomePage user={user} />} />
              {/* redirect to Homepage if path in address bar hasn't matched a <Route> above */}
              {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
