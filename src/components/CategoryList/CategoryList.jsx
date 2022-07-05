import * as catAPI from '../../utilities/categories-api';


import { useState, useEffect, useRef } from 'react';



export default function CategoryList({ }) {
    const [allCats, setAllCats] = useState([]);
    // const [newCat, setNewCat] = useState([]);
    const [activeCat, setActiveCat] = useState([]);
    const [formData, setFormData] = useState({
        title: ""
    });


    //*** function = Getting Data From Backend  ***//
    useEffect(function () {
        async function getCats() {
            const cats = await catAPI.getAll();
            setAllCats(cats);
        }
        getCats();
    }, []);


    //*** fucntion = creating new category ***//

    async function deleteCat(evt) {
        console.log(evt.target.value)
        //sending new data to backend
        const addCat = await catAPI.deleteCat(evt.target.value);
        
        // get data again from the backend
        // const cats = await catAPI.getAll();
        console.log(addCat)
        setAllCats(addCat);
    }

    //*** fucntion = creating new category ***//
    async function handleSubmit(evt) {
        // evt.preventDefault();
        //sending new data to backend
        const addCat = await catAPI.newCat(formData);
        console.log(addCat)
        // get data again from the backend
        // const cats = await catAPI.getAll();
        return setAllCats(addCat);
    }

    //*** function = form data ***//
    function handleChange(evt) {
        const updatedCat = { [evt.target.name]: evt.target.value };
        setFormData(updatedCat)
        // console.log(formData)
        // setNewCat(evt.target.value);
    }



    return (
        <div >
            <ul className="pl-3 text-white flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false" >

                {allCats.map((cat) => (
                    <>
                        <li
                            key={cat._id}
                            onClick={() => setActiveCat(cat)}
                        >
                            {cat.title}
                        </li>
                        <button type="submit" value={cat._id} onClick={deleteCat}> delete</button>
                    </>
                ))}
                {/* {cats} */}

            </ul>
            <form action="">
                <input name="title" value={formData.title} type="text" placeholder="New Category.." onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add new </button>
            </form>

        </div>
    );
}
