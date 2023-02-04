import React, { useState } from 'react';
// import "./signup.css";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVolunteer, setIsVolunteer] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to call the Django REST API to submit the sign-up information
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
                                    <label htmlFor="email" className='text-center'></label>
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
                                        <label htmlFor="password" className='text-center'></label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder='Password'
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <label htmlFor="isVolunteer" >I am a:</label>
                                    <input
                                        type="radio"
                                        id="isVolunteer"
                                        value={true}
                                        checked={isVolunteer}
                                        onChange={() => setIsVolunteer(true)}
                                    />
                                    Volunteer
                                    <input
                                        type="radio"
                                        id="isOrganization"
                                        value={false}
                                        checked={!isVolunteer}
                                        onChange={() => setIsVolunteer(false)}
                                    />
                                    Organization
                                </div>
                                <button type="submit" className='btn'>Sign Up</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
  );
};

