export default function TodoListForm() {
  return (
    <>
      <div className="font-extralight text-2xl text-left h-1/2 px-2 py-2">
        <h3>Create a new to-do</h3>
      </div>
      <div className="flex flex-col form max-w-xs mx-auto">
        <form action="">
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">
            Title
          </label>
          <input type="text" placeholder="write here..." />
          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">Date</label>
          <input type="date" placeholder="write here..." />
          <p>&nbsp;</p>

          {/* // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM */}
          {/* <label >Category</label>
                    <select name="Category">
                    <option value="A">a</option>
                    <option value="B">b</option>
                    <option value="C">c</option>
                    </select> */}

          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">Urgency</label>
          <select name="urgency">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>

          <p>&nbsp;</p>
          <label className="font-extralight text-2l text-left h-1/2 px-2 py-2">Description</label>
          <input type="text" placeholder="write here..." />
          <p>&nbsp;</p>
          <button type="submit" className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400">
            Create new to-do
          </button>
        </form>
      </div>
    </>
  );
}
