import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SignUpImg } from "../../images/signupImg.svg";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="LoginWrapper">
      <div className="LeftWrapper">
        <SignUpImg className="immmg" />
      </div>
      <div className="RightWrapper">
        <h1 className="welcome">Welcome to Lilies!</h1>
        <input type="text" placeholder="Your First Name" className="input" />
        <input type="text" placeholder="Your Email Address" className="input" />
        <input type="text" placeholder="Your Password" className="input1" />
        <button className="loginBtn" onClick={() => navigate("/dashboard")}>
          SIGN UP
        </button>
        <div>
          <ul>
            <li onClick={() => navigate('/login')} className="lin">Already have an account. LOGIN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
