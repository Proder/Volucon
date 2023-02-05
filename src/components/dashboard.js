import React from "react"
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import "..\src\index.css";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    // const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get("http://)
    //         .then((res) => {
    //             setData(res.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    // const signPage = () => {
    //     navigate("/Signup", { replace: true });
    // };

    // const logout = () => {
    //     localStorage.removeItem("token");
    //     navigate("/login");
    // };


    return (
        <>
        <div class="sidebar">
            
                
            
            </div>
        
        </>
    );
};
