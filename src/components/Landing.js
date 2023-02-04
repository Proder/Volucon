import React from "react";
import Login from "./login";

export default function Landing() {
    return (
        <>
        <Login />
        <section className="hero">
            <img src={require("../images/grid.png")} alt="" className="photo-grid" />
            <section id="about" class="about">
                <h1>About Us</h1>
                <div class="max-width">
                    <div data-aos="zoom-in" class="photo"><img src={require("../images/download.png")} alt="" height="300px" width="330px"></img></div>
                    <div class="about-content">
                        <p data-aos="fade-left" class="text-1">A platform to connect volunteers to Organizations. <span>We give you all the freedom to choose whatever you want</span> to get relief from stress. </p>
                    </div>
                </div>

            </section>

        
  
        </section >
        </>
    )
}