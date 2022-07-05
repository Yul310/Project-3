import * as catAPI from '../../utilities/categories-api';


import { useState, useEffect, useRef } from 'react';


// categories, activeCat, setActiveCat
export default function CategoryList({ }) {
    const [allCats, setAllCats] = useState([]);
    // const [newCat, setNewCat] = useState([]);
    const [activeCat, setActiveCat] = useState([]);
    const [formData, setFormData] = useState({
        title: ""
      });


    //Getting Data From Backend
    useEffect(function () {
        async function getCats() {
            const cats = await catAPI.getAll();
            setAllCats(cats);
            console.log(allCats)
        }
        getCats();
    }, []);

    // for loop to display all categories
    const cats = allCats.map(cat =>
        <li
            key={cat}
            onClick={() => setActiveCat(cat)}
        >
            {cat.title}
        </li>
    );

    //creating new category
    async function handleSubmit(evt) {
        evt.preventDefault();
        // 1. Call the addItemToCat function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cat.
        // const updatedCat = await catAPI.addCat();
        // 2. Update the cat state with the updated cat received from the server
        // try {
        //     const formData
        // }
        const addCat = await catAPI.newCat(formData);
    //    setAllCats(formData)
        // console.log(allCats)
        // setNewCat("")

    }
    function handleChange(evt) {
        const updatedCat = { [evt.target.name]: evt.target.value };
        setFormData(updatedCat)
        console.log(formData)
        // setNewCat(evt.target.value);
    }


    //===hook using method/importing categories from todo===//
    // Obtain a ref object
    // const categoriesRef = useRef([]);
    // const categories = categoriesRef.current

    // useEffect(function () {
    //     async function getLists() {
    //         //   const items = await todosAPI.getAll();
    //         categoriesRef.current = ['default_0', 'default_1']
    //         //   categoriesRef.current = todos.reduce((cats, item) => {
    //         //     const cat = todo.category.name;
    //         //     return cats.includes(cat) ? cats : [...cats, cat]
    //         //   }, []);
    //         setActiveCat(categoriesRef.current[0]);

    //     }
    //     getLists();
    // }, [])

    // const cats = categories.map(cat =>
    //     <li
    //         key={cat}
    //         className={cat === activeCat ? 'active' : ''}
    //         onClick={() => setActiveCat(cat)}
    //     >
    //         {cat}
    //     </li>
    // );

    return (
        <div >
            <ul className="pl-3 text-white flex-col justify-items-start  order-last p-2 border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] border-r-8 hover:border-r-8 hover:border-[#e4e6c3] focus:border-[#f7f7f2] transition-colors duration-300 text-lg font-extralight"
                aria-selected="false" >

                {cats}

            </ul>
            <form action="">
                <input name="title" value={formData.title} type="text" placeholder="New Category.." onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add new </button>
            </form>

        </div>
    );
}
