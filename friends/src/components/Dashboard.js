import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

const Dashboard = () => {
    const [friendsData, setFriendsData] = useState([]);
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res.data);
            setFriendsData(res.data);
        })
    }, [fetch]);

    return (
        <div className = "dashboard">
            <h2>Dashboard</h2>
            <AddFriend fetch = {fetch} setFetch = {setFetch} />
            <div className = "allfriends">
            {friendsData.map(friend => (
                <div key = {friend.id} className = "friend">
                    <button key = {friend.id} className = "deletefriend" onClick = {() => axiosWithAuth().delete(`/api/friends/${friend.id}`).then(setFetch(!fetch))}>Delete</button>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Dashboard;