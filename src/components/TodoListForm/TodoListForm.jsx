import * as todoAPI from "../../utilities/todos-api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TodoListForm({ setUpdated, allCats }) {
  // const [allTodos, setAllTodos] = useState([]);
  // const [activeTodo, setActiveTodo] = useState([]);
  const [formData, setFormData] = useState({
    // add in all the other fields
    title: "",
    date: "",
    // time: "",
    category: "",
    description: "",
    urgency: "",
  });


  const magic = setUpdated()

  async function handleSubmit(evt) {
    evt.preventDefault();

    // setAllTodos([...allTodos,formData]);

    //


    //sending new data to backend
    todoAPI.newTodo(formData);
    setUpdated(!magic)
    // get data again from the backend
    // const todos = todoAPI.getAll();
    setFormData({
      title: "",
      date: "",
      description: "",
      urgency: ""
    });

  }

  //*** function = form data ***//
  function handleChange(evt) {

    // evt.target.idProp ?
      const updatedTodo = { ...formData, [evt.target.idProp]: evt.target.value }
      //  :
      // const updatedTodo = { ...formData, [evt.target.name]: evt.target.value }

    setFormData(updatedTodo);
    console.log(formData);
    // setNewTodo(evt.target.value);
  }

  return (
    <>
      <div className="flex flex-col form max-w-xs mx-auto bg-orange-400">
        <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2">

          {/* // don't think I actually want all todos to show on the form */}
          {/* <div>
            {allTodos.map((todo, idx) => (
              <>
                <li key={idx} onClick={() => setActiveTodo(todo)}>
                  <Link to={`/todos/${todo.title}`}>{todo.title}</Link>

                  <button
                    type="submit"
                    value={todo._id}
                    // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
                    onClick={deleteTodo}
                  >
                    delete
                  </button>
                </li>
              </>
            ))}
            //  {todos}
          </div> */}

          <h3>Create a new to-do</h3>
        </div>
        <form action="" onChange={handleChange}>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="write here..."
          />
          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            placeholder="write here..."
          />
          <p>&nbsp;</p>

          {/* // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM */}
          <label >Category</label>
          <select name="Category">
            {allCats.map((cat) => (<option idProp={cat._id} value={formData.category}>{cat.title}</option>))}

            {/* <option value="A">a</option>
            <option value="B">b</option>
            <option value="C">c</option> */}
          </select>

          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Urgency
          </label>
          <select name="urgency" value={formData.urgency}>

            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="write here..."
          />
          <p>&nbsp;</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400"
          >
            Create new to-do
          </button>
        </form>
      </div>
    </>
  );
}
