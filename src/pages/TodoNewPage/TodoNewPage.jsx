import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";

export default function TodoIndexPage({setUpdated,allTodos}) {
  return (
    <>
      <div>
        <h1>TodoIndexPage</h1>
        <TodoList allTodos={allTodos} />
        <TodoListForm setUpdated={setUpdated} />
      </div>
    </>
  );
}
