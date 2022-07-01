
export default function TodoListForm() {
    return (
        <>
            <h3>Todo List Form</h3>
            <div>
                <form action="">
                    <label >Title</label>
                    <input type="text" placeholder="write here..." />
                    <label >Date</label>
                    <input type="text" placeholder="write here..." />

                    <label >Category</label>
                    <select name="Category">
                    <option value="A">a</option>
                    <option value="B">b</option>
                    <option value="C">c</option>
                    </select>

                    <label >Urgency</label>
                    <select name="urgency">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>

                    <label >Description</label>
                    <input type="text" placeholder="write here..." />
                   
                    <button type="submit" >Save</button>
                </form>
            </div>



        </>
    )
}