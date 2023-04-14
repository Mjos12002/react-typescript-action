import React from "react";

function User(){
    return (
        <div className="main-parent">
            <div className="header-section">
                <ul>
                    <li>Home</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="principal-section">
                <div className="left">
                    Left
                </div>
                <div className="right">
                    Right
                </div>
                <div className="footer">
                    Footer
                </div>
            </div>
        </div>
    )
}

export default User;