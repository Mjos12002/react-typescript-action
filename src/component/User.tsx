import React from "react";
import '../styles/User.css';

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
                    <div>
                        Right left
                    </div>
                    <div>
                        Right right
                    </div>
                </div>
                <div className="footer">
                    Footer
                </div>
            </div>
        </div>
    )
}

export default User;