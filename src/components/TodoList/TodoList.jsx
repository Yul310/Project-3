import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList() {
  return (
    <>
      <div className="flex-col flex">
        <h3>Todo List</h3>
        <TodoListItem />
      </div>
    </>
  );
}
