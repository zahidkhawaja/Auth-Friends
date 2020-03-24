import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = ({ fetch, setFetch }) => {
    const [newFriendData, setNewFriendData] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChanges = e => {
        setNewFriendData({
            ...newFriendData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", newFriendData)
        .then(res => {
            setFetch(!fetch);
            console.log(res);
            setNewFriendData({
                id: "",
                name: "",
                age: "",
                email: ""
            });
            

        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div className = "friendformdiv">
        <div className = "friendform">
            <h3>Add Friend</h3>
            <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newFriendData.name}
            onChange={handleChanges}
            placeholder = "Name"
          />
          <br/>
          <input
            type="age"
            name="age"
            value={newFriendData.age}
            onChange={handleChanges}
            placeholder = "Age"
          />
          <br/>
          <input
            type="email"
            name="email"
            value={newFriendData.email}
            onChange={handleChanges}
            placeholder = "Email"
          />
          <br/>
          <button>Add</button>
        </form>
        </div>
        </div>
    );
};

export default AddFriend;