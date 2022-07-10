import CategoryList from "../../components/CategoryList/CategoryList";
// import CategoryTodo from "../../components/CategoryTodo/CategoryTodo";

export default function NoteIndexPage({ allCats, setAllCats, setUpdated, categories}) {




  return (
    <>
  

      <div className="flex-col  px-10 flex m-9">
     
        {/* <CategoryTodo categories={categories} setActiveCat={setActiveCat}/> */}

        <h1>All Category List</h1>
       
        <CategoryList allCats={allCats} setAllCats={setAllCats} setUpdated={setUpdated} categories={categories} />
      </div>
    </>
  );
}
