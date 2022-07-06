import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";
import { Link } from "react-router-dom";
import * as todoAPI from "../../utilities/todos-api";



export default function TodoIndexPage() {
  return (
    <>
      <div>
        <h1>TodoIndexPage</h1>
        <TodoList />
        {/* <TodoListForm /> */}
      </div>
      <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">
          {/* // create new todo */}
          <Link to={`/todos/new`}>
            <button className="border-1 border-black bg-black  rounded text-white text-medium px-1 mx-2">
              Create new todo
            </button>
          </Link>
        </div>
    </>
  );
}
