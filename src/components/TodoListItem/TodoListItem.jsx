import { useParams } from "react-router-dom"; //you can import more than one thing at a time



export default function TodoListItem(props) {
  let { todo } = useParams();


    return (
      <>
        <h5>TodoListItem</h5>
      </>
    );
  }
  