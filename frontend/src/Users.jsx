import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Users(){
    return (
        <div className="grid-container">
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="main-title">
                    <h3> Users</h3>
                </div>
                <div className="boom">
                <span> Please update your profile from the settings. </span>
            </div>
			</div>
        </div>
    )
}

export default Users;