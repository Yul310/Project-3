import "./App.css";
import { useState, useEffect, useRef } from "react";
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
import * as noteAPI from "../../utilities/notes-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allTodos, setAllTodos] = useState([]);
  const [catTodos, setCatTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [allCats, setAllCats] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const categoriesRef = useRef([]);

  const gapi = window.gapi;
  const CLIENT_ID =
    "272986187803-i6090pm51v34oito1cpg0le75qiq5132.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAMYQ9LO9hYPp8tOvoANAuyxB-JheNtjLk";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";


  //////////////////////////////////////////////////
  //*** function = Google Calendar API  ***//
  //////////////////////////////////////////////////


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

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: "Google I/O 2015",
            location: "800 Howard St., San Francisco, CA 94103",
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: "2022-07-07T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2022-07-08T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };
          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });
          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };


  //////////////////////////////////////////////////
  //*** function = Getting Data From Backend  ***//
  //////////////////////////////////////////////////

  // notes
  useEffect(
    function () {
      async function getNotes() {
        const notes = await noteAPI.getAll();
        setAllTodos(notes);
        //   console.log(allTodos);
      }
      getNotes();
    },
    [updated]
  );

  // todos
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

  // categories
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


  //categories + todos
  useEffect(function () {
    async function getCatTodos() {
      const todos = await todoAPI.getAll();
      categoriesRef.current = todos.reduce((cats, todo) => {
        const cat = todo.category.title;
        console.log(cat)
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setCatTodos(todos)
      setActiveCat(todos[0].category.title);
    }
    getCatTodos();
  }, []);





  return (
    <main>
      {user ? (
        <>
          <button onClick={handleClick}>Add Event</button>
          <div className="App flex flex-row">
            <NavBar user={user} setUser={setUser} setUpdated={setUpdated} categories={categoriesRef.current}/>
            <Routes>
              {allNotes ? (
                <Route
                  path="/notes"
                  element={
                    <NoteIndexPage
                      allNotes={allNotes}
                      setAllNotes={setAllNotes}
                      setUpdated={setUpdated}
                      allCats={allCats}
                    />
                  }
                />
              ) : (
                "loading"
              )}

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
                    categories={categoriesRef.current}
                    allCats={allCats}
                    setAllCats={setAllCats}
                    setUpdated={setUpdated}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
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
//
