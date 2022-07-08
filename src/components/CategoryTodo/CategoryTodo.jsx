import * as catAPI from "../../utilities/categories-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CategoryTodo({ categories, activeCat, setActiveCat }) {

    // const cats = categories.map((cat) => <ul> <li>{cat}</li> </ul>)
    const cats = categories.map((cat) =>
        <ul>
            <li
                key={cat._id}
                // className={cat === activeCat ? 'active' : ''}
                onClick={() => setActiveCat(cat)}
            >
                {cat}
            </li>
        </ul>
    )


    return (
        <div>

            <h3>|| To-Do Categories ||</h3>

            {cats}

        </div>
    );
}