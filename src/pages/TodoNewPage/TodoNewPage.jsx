import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";

export default function TodoIndexPage() {
  return (
    <>
      <div>
        <h1>TodoIndexPage</h1>
        <TodoList />
        <TodoListForm />
      </div>
    </>
  );
}
