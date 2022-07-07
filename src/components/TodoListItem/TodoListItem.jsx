import { useParams } from "react-router-dom"; //you can import more than one thing at a time
import * as todoAPI from "../../utilities/todos-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as katyTodo from "../../components/TodoList/TodoList";


export default function TodoListItem(props) {
  // todo here is the state that we - this is the state
  const [todo, setTodo] = useState();
  // const [activeTodo, setActiveTodo] = useState([]);
  // const [formData, setFormData] = useState({
  //   // add in all the other fields
  //   title: "",
  //   date: "",
  //   time: "",
  //   description: "",
  //   urgency: "",
  // });
  
  // let { todoName } = useParams();
  // // construct data
  //  const data = katyTodo.getTodos()
  //  console.log(data)

let { id } = useParams();
console.log(id)

   useEffect(function () {
    async function getSingleTodos() {
      const foundTodo = await todoAPI.getById(id);
      setTodo(foundTodo);
      //   console.log(allTodos);
    }
    getSingleTodos();
    // important to have the brackets below, otherwise infinate loop
  }, []);


  // function clickedTodo(todo) {
  //   let selectedTodo = 0;
  //   // movies goes back to the movie seed data from movie homeowrk. What would we need to call here? that is the param that gets passed down
  //   for (let i = 0; i < props.allTodos.length; i++) {
  //     //need to confirm that the movie we are passing through matches with the correct movie data. like matching id's
  //     if (props.allTodos[i].title === todo) {
  //       selectedTodo = i;
  //     }
  //   }
  //   console.log(selectedTodo);
  //   return selectedTodo;
  // }

  // const chosenTodo = clickedTodo(todoName);


  // //*** function = creating new category ***//
  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   //sending new data to backend
  //   const addTodos = await todoAPI.newTodo(formData);
  //   // get data again from the backend
  //   const todos = await todoAPI.getAll();
  //   return setAllTodos(todos);
  // }

  // //*** function = form data ***//
  // function handleChange(evt) {
  //   const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };
  //   setFormData(updatedTodo);
  //   console.log(formData);
  //   // setNewTodo(evt.target.value);
  // }


  return (
    <>
      <h5>TodoListItem</h5>
      
      <p>{todo.title}</p>
      {/* <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2 border-[#1f1f1f] border-b-[1px]">

    <p>{props.allTodos[chosenTodo].title}</p>
    <p>{props.allTodos[chosenTodo].date}</p> */}
    {/* <p>{formData.urgency}</p> */}
    {/* <p>{props.allTodos[chosenTodo].urgency}</p>
    <p>{props.allTodos[chosenTodo].description}</p>


      </div> */}
    </>
  );
}
