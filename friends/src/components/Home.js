import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className = "homepage">
            <h2>Homepage</h2>
            <p>Need to login? Click <Link to = "/login">here</Link></p>
        </div>
    );
};

export default Home;