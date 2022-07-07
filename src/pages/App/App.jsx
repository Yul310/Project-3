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
  const [allCats, setAllCats] = useState([]);

  const gapi = window.gapi;
  const CLIENT_ID =
    "272986187803-i6090pm51v34oito1cpg0le75qiq5132.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAMYQ9LO9hYPp8tOvoANAuyxB-JheNtjLk";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2.getAuthInstance().signIn();
    });
  };

  //*** function = Getting Data From Backend  ***//
  useEffect(
    function () {
      async function getTodos() {
        const todos = await todoAPI.getAll();
        setAllTodos(todos);
        //   console.log(allTodos);
      }
      getTodos();
    },
    [updated]
  );

  useEffect(
    function () {
      async function getCats() {
        const cats = await catAPI.getAll();
        setAllCats(cats);
        //   console.log(allCats);
      }
      getCats();
    },
    [updated]
  );

  return (
    <main>
      {user ? (
        <>
          <button onClick={handleClick}>Add Event</button>
          <div className="App flex flex-row">
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/notes" element={<NoteIndexPage />} />
              {allTodos ? (
                <Route
                  path="/todos"
                  element={
                    <TodoIndexPage
                      allTodos={allTodos}
                      setAllTodos={setAllTodos}
                    />
                  }
                />
              ) : (
                "loading"
              )}
              <Route
                path="/todos/new"
                element={
                  <TodoNewPage
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                    setUpdated={setUpdated}
                    allCats={allCats}
                  />
                }
              />
              <Route
                path="/todos/:id"
                element={<TodoListItem allTodos={allTodos} />}
              />
              <Route
                path="/categories"
                element={
                  <CategoryIndexPage
                    allCats={allCats}
                    setAllCats={setAllCats}
                    setUpdated={setUpdated}
                  />
                }
              />
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
