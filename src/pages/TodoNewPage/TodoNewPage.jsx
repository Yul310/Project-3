import TodoList from "../../components/TodoList/TodoList";
import TodoListForm from "../../components/TodoListForm/TodoListForm";

export default function TodoIndexPage({setUpdated,allTodos,setAllTodos,allCats,activeCat,updated}) {
  return (
    <>
      <div>
        <h1>TodoIndexPage</h1>
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos} activeCat={activeCat} setUpdated={setUpdated}updated={updated}/>
        <TodoListForm setUpdated={setUpdated} allCats={allCats}  />
      </div>
    </>
  );
}
