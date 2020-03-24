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
            <h3>Friends</h3>
            {friendsData.map(friend => (
                <div id = {friend.id}>
                    {friend.name}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;