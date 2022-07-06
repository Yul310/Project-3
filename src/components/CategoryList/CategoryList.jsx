import * as catAPI from "../../utilities/categories-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CategoryList({}) {
  const [allCats, setAllCats] = useState([]);
  // const [newCat, setNewCat] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
  });

  //*** function = Getting Data From Backend  ***//
  useEffect(function () {
    async function getCats() {
      const cats = await catAPI.getAll();
      setAllCats(cats);
      //   console.log(allCats);
    }
    getCats();
  }, []);

  //*** fucntion = deleting a category ***//
  async function deleteCat(evt) {
    // console.log(evt.target.value);
    const cats = allCats.filter((cat) => cat._id !== evt.target.value);
    console.log(cats);
    setAllCats(cats);
    //sending new data to backend
    const addCat = await catAPI.deleteCat(evt.target.value);
  }

    //*** fucntion = editing a category ***//
    async function editCat(evt) {
        console.log(evt.target.value);
      
        const cats = allCats.filter((cat) => cat._id !== evt.target.value);
        console.log(cats);
        setAllCats(cats);
        const addCat = await catAPI.deleteCat(evt.target.value);
      }

  //*** fucntion = creating new category ***//
  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData);
    // console.log(allCats)
    // updating frontend
    setAllCats([...allCats,formData])
    // sending new data to backend
    catAPI.newCat(formData)
    setFormData({
        title: ""
      })
  }



  //*** function = form data ***//
  function handleChange(evt) {
    const updatedCat = { [evt.target.name]: evt.target.value };
    setFormData(updatedCat);
    console.log(formData);
    // setNewCat(evt.target.value);
  }

  return (
    <div>
      <ul
        className="pl-3 text-black flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
        aria-selected="false"
      >
        {allCats.map((cat, idx) => (
          <>
            <li key={idx} onClick={() => setActiveCat(cat)}>
              <Link to={`/categories/${cat.title}`}>{cat.title}</Link>

              <button type="submit" value={cat._id} onClick={deleteCat}>
                Delete
              </button>
              <button type="submit" value={cat._id} onClick={editCat}>
                Edit
              </button>
            </li>
          </>
        ))}
        {/* {cats} */}
      </ul>
      <form action="">
        <input
          name="title"
          value={formData.title}
          type="text"
          placeholder="New Category.."
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add new{" "}
        </button>
      </form>
    </div>
  );
}
