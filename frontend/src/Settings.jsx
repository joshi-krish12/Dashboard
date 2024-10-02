import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Settings(){
    return (
        <div className="grid-container">
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="main-title">
                    <h3> Settings</h3>
                </div>
			</div>
        </div>
    )
}

export default Settings;