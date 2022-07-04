
export default function TodoListForm() {
    return (
        <>
            <h3>Todo List Form</h3>
            <div>
                <form action="">
                    <label >Title</label>
                    <input type="text" placeholder="write here..." />
                    <label >Date</label>
                    <input type="date" placeholder="write here..." />

                    {/* // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM */}
                    {/* <label >Category</label>
                    <select name="Category">
                    <option value="A">a</option>
                    <option value="B">b</option>
                    <option value="C">c</option>
                    </select> */}

                    <label >Urgency</label>
                    <select name="urgency">
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    </select>

                    <label >Description</label>
                    <input type="text" placeholder="write here..." />
                   
<<<<<<< HEAD
                    <button type="submit" >Save</button>
=======
                    <button type="submit">Create new to-do</button>
>>>>>>> main
                </form>
            </div>



        </>
    )
}