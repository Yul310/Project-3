import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";

export default function TodoIndexPage({setUpdated,allTodos,setAllTodos}) {
  return (
    <>
      <div>
        <h1>TodoIndexPage</h1>
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos} />
        <TodoListForm setUpdated={setUpdated} />
      </div>
    </>
  );
}
