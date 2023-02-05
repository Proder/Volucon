import React from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();

    const homePage = () => {
        navigate("/dashboard", { replace: true });
    };

    const profilePage = () => {
        navigate("/Profile", { replace: true });
    };
    const recommands = () => {
        navigate("/Recommendations", { replace: true });
    };
    const appliedPage = () => {
        navigate("/Applied", { replace: true });
    };
    const Following = () => {
        navigate("/Following", { replace: true });
    };

    return (
        <nav>
            <img src={require("../images/logo.png")} className="logo"></img>
            <div className="nav-links">
            <button className="butn"
                    onClick={homePage}>Home
                </button>
                <button className="butn"
                    onClick={profilePage}>Profile
                </button>
                <button className="butn"
                    onClick={recommands}>Recommendations
                </button>
                <button className="butn"
                    onClick={appliedPage}>Applied
                </button>
                <button className="butn"
                    onClick={Following}>Following
                </button>
            </div>
        </nav>
    );
}

