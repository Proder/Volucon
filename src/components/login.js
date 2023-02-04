import React,{ useState } from "react";
import './login_style.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const signPage = () => {
        navigate("/Signup", { replace: true });
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to call the Django REST API to submit the login information
    };
    return (
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                        <img src={require("../images/logo.png")} className="logo-img"></img>
                    </div>
                </div>
                <div className="body-form">
                    <form onSubmit={handleSubmit}>

                        <div className="input">
                            <div>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="input-group mb-3">

                                <div>
                                    <label htmlFor="password">  </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="button" className="btn ">LOGIN</button>
                        </div>
                        <div className="message">
                            <p className="text-center">Don't have an account?<button type="button" className="btn" onClick={signPage}>Sign Up</button></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
