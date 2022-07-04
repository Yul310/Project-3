import { useState } from "react";
// import './AuthPage.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    //   <main>
    //   <h1>AuthPage</h1>
    //   <SignUpForm setUser={setUser} />
    //   <LoginForm setUser={setUser} />
    // </main>

    //testing so only signup or login show
    <>
      <main className="flex flex-col h-screen">
        <div className="bg-[#1f1f1f] px-10 flex mt-16" id="diagonal">
          <div className=" text-[8.5rem] mb-[-29px]" id="revdiagonal">
            <Logo />
            {/* <div className="bg-[#7b7e63] px-10"></div>{" "} */}
          </div>
        </div>
        <div className="p-20">
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "SIGN UP" : "LOG IN"}
          </button>
          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </div>
      </main>
    </>
  );
}
