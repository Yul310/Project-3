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
    console.log(formData)
    
    // const oneallCats.filter((cat) => cat.title === formData.category)
    // conso

    // setAllTodos([...allTodos,formData]);
    // addTodos(formData);
    //send new form data to app
    // setAllTodos(todos);
    //sending new data to backend
    todoAPI.newTodo(formData);
    setUpdated(!magic)
    // get data again from the backend
    // const todos = todoAPI.getAll();
    setFormData({
      title: "",
      date: "",
      description: "",
      urgency: "",
      category: ""

    });

  }

  //*** function = form data ***//
  function handleChange(evt) {
    

    // const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };

    // setFormData( evt.target.name === "category"? { ...formData, [evt.target.name]: evt.target.key }:{ ...formData, [evt.target.name]: evt.target.value } );
    setFormData({ ...formData, [evt.target.name]: evt.target.value } );

    console.log(formData);
    // console.log(allCats)
    // setNewTodo(evt.target.value);
  }

  return (
    <>
      <div className="p-2 rounded-lg font-light">
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
        <form action="" onChange={handleChange} className="border-black border-[1px] rounded-md py-4 px-4 font-light"
          id="hardshadow">
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="write here..."
            className="bg-[#f7f7f2] text-lg border-b-[1px] border-black outline-0"
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

          <select name="category" value={formData.category}>

            {allCats.map((cat) => <option  value={cat._id} key={cat._id} >{cat.title}</option>)}

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

