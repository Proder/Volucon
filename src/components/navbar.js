import React from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login", { replace: true });
    };
    return (
        <nav>
            <img src={require("../images/logo.png")} className="logo"></img>
            <div className="nav-links">
                <button className="btn"
                    onClick={loginPage}>Login
                </button>
                <button className="btn"
                    onClick={loginPage}>Sign Up
                </button>
            </div>
        </nav>
    );
}