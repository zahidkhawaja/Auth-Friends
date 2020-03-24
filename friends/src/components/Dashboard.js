import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
    const [friendsData, setFriendsData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res.data);
            setFriendsData(res.data);
        })
    }, [])

    return (
        <div className = "dashboard">
            <h2>Dashboard</h2>
            <div className = "allfriends">
            {friendsData.map(friend => (
                <div id = {friend.id} className = "friend">
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