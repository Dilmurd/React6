import React, { useRef } from "react";
import "./Login.scss";
import axios from "axios";
import { useStateValue } from "../../context";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        dispatch({ type: "ADD_TOKEN", payload: res.data.accessToken });
        navigate("/admin/create-product");
      })
      .catch((res) => console.log(res));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" className="inps">
        <h1>Login</h1>
        <input ref={username} type="text" placeholder="Username" />
        <input ref={password} type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
