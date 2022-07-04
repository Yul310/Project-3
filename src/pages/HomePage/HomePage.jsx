import * as usersService from "../../utilities/users-service";
import NoteList from "../.././components/NoteList/NoteList";
import TodoList from "../.././components/TodoList/TodoList";

export default function HomePage({ user }) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className="w-screen px-8">
        <h1 className="font-semibold text-3xl text-left px-2 pt-6 pb-2 border-[#1f1f1f] border-b-2">
          Hello, {user.name}!
        </h1>
        <div className=" h-[85%] ">
          <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
            <h1>Notes</h1>
            <NoteList />
          </div>
          <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2">
            <h1>To-Do's</h1>
            <TodoList />
          </div>
        </div>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      </div>
    </>
  );
}
