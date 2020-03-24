import React, { useState } from "react";

const Login = () => {
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