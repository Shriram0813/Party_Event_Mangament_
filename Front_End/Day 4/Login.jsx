import "../assets/css/Login.css"
import  { useState } from "react";
import "../assets/css/Login.css"
import SignIn from "./Signin";
import Signup from "./Signup";

export default function App() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      

      <h2>PARTY EVENT MANAGEMENT</h2>
      <center>
     
      <div className={containerClass} id="container">
        

        <Signup />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost " id="signUp" onClick={() => handleOnClick("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
}
// const Login = () => {
//   return (
//     <div className="content">
//       <form className="wrapper">
//         <h1>Login</h1>

//         <div className="input-box">
//           <input type="text" placeholder="Username" required />
//           <i className='bx bx-user'></i>
//         </div>

//         <div className="input-box">
//           <input type="password" placeholder="Password" required />
//           <i className='bx bxs-lock-alt'></i>
//         </div>

//         <div className="remember-forgot">
//           <label><input type="checkbox" />Remember me</label>
//           <a href="#">Forgot password?</a>
//         </div>

//         <button type="submit" className="btn">Login</button>

//         <div className="register-link">
//           <p>
//             Dont have an account?
//             <a href="#">Register me</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;
