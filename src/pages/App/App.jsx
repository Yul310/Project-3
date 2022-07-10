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
import { gapi } from "gapi-script";
import * as todoAPI from "../../utilities/todos-api";
import * as catAPI from "../../utilities/categories-api";
import * as noteAPI from "../../utilities/notes-api";
import ScheduleAppointment from "../ScheduleAppointment/ScheduleAppointment";
import { set } from "mongoose";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allTodos, setAllTodos] = useState([]);
  const [catTodos, setCatTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [allCats, setAllCats] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const categoriesRef = useRef([]);

  // const gapi = window.gapi;
  const CLIENT_ID =
    "272986187803-i6090pm51v34oito1cpg0le75qiq5132.apps.googleusercontent.com";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
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
        plugin_name: "clearsight",
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: "Google I/O 2022",
            location: "800 Howard St., San Francisco, CA 94103",
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: "2022-07-07T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2015-07-09T17:00:00-07:00",
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

  // const event = {
  //   summary: "Hello World",
  //   location: "",
  //   start: {
  //     dateTime: "2022-08-28T09:00:00-07:00",
  //     timeZone: "America/Los_Angeles",
  //   },
  //   end: {
  //     dateTime: "2022-08-28T17:00:00-07:00",
  //     timeZone: "America/Los_Angeles",
  //   },
  //   recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  //   attendees: [],
  //   reminders: {
  //     useDefault: false,
  //     overrides: [
  //       { method: "email", minutes: 24 * 60 },
  //       { method: "popup", minutes: 10 },
  //     ],
  //   },
  // };

  // const addEvent = (calendarID, event) => {
  //   function initiate() {
  //     gapi.client
  //       .request({
  //         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //         method: "POST",
  //         body: event,
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //       .then(
  //         (response) => {
  //           return [true, response];
  //         },
  //         function (err) {
  //           console.log(err);
  //           return [false, err];
  //         }
  //       );
  //   }
  //   gapi.load("client", initiate);
  // };

  // addEvent(calendarID, event);

  //////////////////////////////////////////////////
  //*** function = Getting Data From Backend  ***//
  //////////////////////////////////////////////////

  // notes
  useEffect(
    function () {
      async function getNotes() {
        const notes = await noteAPI.getAll();
        // console.log(notes);
        setAllNotes(notes);
        
        console.log(allNotes);
      }
      getNotes();
    },
    [updated]
  );

  // // todos
  // useEffect(
  //   function () {
  //     async function getTodos() {
  //       const todos = await todoAPI.getAll();
  //       setAllTodos(todos);
  //       //   console.log(allTodos);
  //     }
  //     getTodos();
  //   },
  //   [updated]
  // );

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
  useEffect(
    function () {
      async function getCatTodos() {
        const todos = await todoAPI.getAll();
        categoriesRef.current = todos.reduce((cats, todo) => {
          const cat = todo.category.title;
          // console.log(cat);
          return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setAllTodos(todos);
        setCatTodos(todos);

        // setActiveCat === ""
        setActiveCat(activeCat);
        // setActiveCat(activeCat);
        // setActiveCat(todos[0].category.title);
        console.log(setActiveCat);
      }
      getCatTodos();
    },
    [updated]
  );

  

  return (
    <main>
      {user ? (
        <>
          {/* <button onClick={handleClick}>Add Event</button> */}
          <div className="App flex flex-row">
            <NavBar
              user={user}
              setUser={setUser}
              setUpdated={setUpdated}
              categories={categoriesRef.current}
              setActiveCat={setActiveCat}
            />
            <Routes>
              {allNotes ? (
                <Route
                  path="/notes"
                  element={
                    <NoteIndexPage
                      allNotes={allNotes}
                      setAllNotes={setAllNotes}
                      updated={updated}
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
                      // allTodos={allTodos.filter(
                      //   (todo) => todo.category.title === activeCat
                      // )}
                      allTodos={allTodos}
                      setAllTodos={setAllTodos}
                      activeCat={activeCat}
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
                    // allTodos={allTodos.filter(
                    //   (todo) => todo.category.title === activeCat
                    // )}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                    updated ={updated}
                    setUpdated={setUpdated}
                    allCats={allCats}
                    activeCat={activeCat}
                  />
                }
              />
              <Route
                path="/todos/:id"
                element={
                  <TodoListItem
                    // allTodos={allTodos.filter(
                    //   (todo) => todo.category.title === activeCat
                    // )}
                    allTodos={allTodos}
                    allCats={allCats}
                    activeCat={activeCat}
                    updated ={updated}
                    setUpdated={setUpdated}
                    setAllTodos={setAllTodos}
                    setActiveCat={setActiveCat}
                  // allTodos={allTodos}
                  />
                }
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
              <Route
                path="/"
                element={
                  <HomePage
                    user={user}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                    setUpdated={setUpdated}
                    allCats={allCats}
                    activeCat={activeCat}
                    allNotes={allNotes}
                  />
                }
              />
              <Route
                path="/appointments"
                element={
                  <ScheduleAppointment
                    user={user}
                    // allTodos={allTodos}
                    // setAllTodos={setAllTodos}
                    // setUpdated={setUpdated}
                    // allCats={allCats}
                    // activeCat={activeCat}
                  />
                }
              />
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
