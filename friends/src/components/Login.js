import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", loginData)
        .then(res => {
            console.log(res);
            window.localStorage.setItem("token", JSON.stringify(res.data.payload));
            history.push("/dashboard");

        })
        .catch(err => {
            console.log(err);
        })
        setLoginData({
            username: "",
            password: ""
        });
    };

    return (
        <div className = "loginform">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChanges}
            placeholder = "Username"
          />
          <br/>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChanges}
            placeholder = "Password"
          />
          <br/>
          <button>Log in</button>
        </form>
        </div>
    );
};

export default Login;