import * as usersService from "../../utilities/users-service";

export default function HomePage() {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div className=" bg-orange-300">
        <h1 className="font-bold text-4xl">HomePage</h1>
        <div>Note List Test</div>
        <div>Todo List Test</div>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      </div>
    </>
  );
}
