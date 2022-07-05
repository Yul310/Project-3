import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList() {
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
