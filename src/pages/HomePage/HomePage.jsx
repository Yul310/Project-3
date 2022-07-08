import * as usersService from "../../utilities/users-service";
import NoteList from "../.././components/NoteList/NoteList";
import TodoList from "../.././components/TodoList/TodoList";
import * as todoAPI from "../../utilities/todos-api";
import * as catAPI from "../../utilities/categories-api";
import * as noteAPI from "../../utilities/notes-api";

export default function HomePage({
  user,
  setUpdated,
  allTodos,
  setAllTodos,
  allCats,
  activeCat,
  allNotes,
  setAllNotes,
}) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className="w-screen px-8">
        <h1 className="font-semibold text-3xl text-left px-2 pt-6 pb-2 border-[#1f1f1f] border-b-[1px]">
          Hello, {user.name}!
        </h1>
        <div className=" h-[85%] ">
          <div className="font-light text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
            <h1 className="text-2xl">Notes</h1>
            <NoteList
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              setUpdated={setUpdated}
              allCats={allCats}
              activeCat={activeCat}
            />
          </div>
          <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2">
            <h1>To-Do's</h1>
            <TodoList
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              setUpdated={setUpdated}
              activeCat={activeCat}
            />
          </div>
        </div>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      </div>
    </>
  );
}
