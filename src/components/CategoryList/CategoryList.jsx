import "./CategoryList.css";
import * as catAPI from "../../utilities/categories-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CategoryList({ allCats, setAllCats, setUpdated }) {
    // const [allCats, setAllCats] = useState([]);
    // const [activeCat, setActiveCat] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
    });
    const [edit, setEdit] = useState(false);
    const magic = setUpdated()

    //*** function = Getting Data From Backend  ***//
    // useEffect(function () {
    //     async function getCats() {
    //         const cats = await catAPI.getAll();
    //         setAllCats(cats);
    //         //   console.log(allCats);
    //     }
    //     getCats();
    // }, []);

    //*** fucntion = deleting a category ***//
    async function deleteCat(evt) {
        // console.log(evt.target.value);
        const cats = allCats.filter((cat) => cat._id !== evt.target.value);
        console.log(cats);
        setAllCats(cats);
        //sending new data to backend
        const addCat = await catAPI.deleteCat(evt.target.value);
    }

    // *** fucntion = editing a category ***//
    async function editCat(evt) {
        console.log(evt.target.value);
        console.log(allCats)
        // FrontEnd updating
      
        const cats = allCats.filter((cat) => cat._id === evt.target.value);
        
        cats[0].title = formData.title
        console.log(cats[0])
       console.log(cats[0].title )
        //Backend updating
        catAPI.editCat(evt.target.value, formData);
        setEdit(!edit)
        setUpdated(!magic)
        
        setFormData({
            title: ""
        })
        
    }

    //*** fucntion = creating new category ***//
    async function handleSubmit(evt) {
        evt.preventDefault();
        // console.log(categories);
        // console.log(allCats)
        // updating frontend
        setAllCats([...allCats, formData])
        // sending new data to backend
        catAPI.newCat(formData)
        setUpdated(!magic)
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
    //*** function = Edit data ***//
    function handleEditing(evt) {
        console.log("edit mode activated")
        setEdit(!edit);

    }

    //*** function = below function is making edit(input) or show(link-text) changes ***//
    //reference => https://ibaslogic.com/how-to-edit-todos-items-in-react/
    let viewMode = {}
    let editMode = {}

    if (edit) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    //
    return (
        <div>
            <ul
                className="pl-3 text-black flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false"
            >
                {allCats.map((cat, { setEdit }) => (
                    <>
                        <li key={cat._id} /*onClick={() => setActiveCat(cat)}*/>
                            <Link to={`/categories/${cat.title}`} style={viewMode} >{cat.title}</Link>
                            <input name="title" type="text" className='textInput' style={editMode} key={cat._id} placeholder={cat.title} onChange={handleChange} />

                            <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2" type="submit" value={cat._id} style={editMode} onClick={deleteCat}>
                                Delete
                            </button>
                            <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2" type="submit" value={cat._id} style={editMode} onClick={editCat}>
                                Save
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
                <button className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2" type="submit" onClick={handleSubmit}>
                    Add new{" "}
                </button>

            </form>
            <button className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2" onClick={handleEditing}>
                Edit
            </button>
        </div>
    );
}
