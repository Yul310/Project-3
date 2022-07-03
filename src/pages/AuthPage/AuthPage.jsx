import { useState } from 'react';
// import './AuthPage.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

  //   <main>
  //   <h1>AuthPage</h1>
  //   <SignUpForm setUser={setUser} />
  //   <LoginForm setUser={setUser} />
  // </main> 

    //testing so only signup or login show
    <main className="AuthPage">
      <div>
        <Logo />
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
