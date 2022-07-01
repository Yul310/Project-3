import * as usersService from "../../utilities/users-service";

export default function HomePage() {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>HomePage</h1>
      <div>Note List</div>
      <div>Todo List</div>
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </>
  );
}
