import * as catAPI from "../../utilities/categories-api";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CategoryTodo({ categories, activeCat, setActiveCat }) {
  // const cats = categories.map((cat) => <ul> <li>{cat}</li> </ul>)
  const cats = categories.map((cat) => (
    <ul>
      <li
        key={cat._id}
        // className={cat === activeCat ? 'active' : ''}
        onClick={() => setActiveCat(cat)}
      >
        {cat}
      </li>
    </ul>
  ));

  return (
    <div>
      <h3 className="font-medium text-left pl-14">Filter by Category</h3>
      <div className="text-left pl-20">{cats}</div>
    </div>
  );
}
