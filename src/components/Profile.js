import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileHeading">Profile Details</div>
        <hr className="headHr"/>
        <div className="name">
          <input placeholder="First_name" className="first_name" />
          <input placeholder="Last_name" className="last_name" />
        </div>
        <div className="profilePart2">
          <input placeholder="Age" className="age" />
          {/* <input placeholder="male" className="gender" /> */}
          <select id="dropdown" className="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Others</option>
          </select>
          <input placeholder="Phone Number" className="phone" />
        </div>

        <div className="subHeading">Address Details: </div>
        <div className="profilePart3">
          <input placeholder="City" className="city" />
          <input placeholder="State" className="state" />
        </div>
        <div className="subHeading">Social Media Details: </div>
        <div className="profilePart4">
          <input placeholder="Contact_email" className="contact_email" />
          <input placeholder="Linkedin" className="linkedin" />
        </div>
        <div className="profilePart5">
          <input placeholder="Twitter" className="twitter" />
          <input placeholder="Instagram" className="instagram" />
        </div>

        <div className="profileBottom">
          <div className="profileBottomRight">
            <button className="updateProfileButton"> Update </button>
            <button className="cancelUpdateButton"> Cancel </button>
          </div>
        </div>
        {/* <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">Het Patel</span>
            <span className="postTime">5 mins ago</span>
            <input placeholder="Change Name" className="shareInput" />
          </div>
          <div className="postTopRight">
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post:)</span>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postLikeCounter">313 people like it</span>
          </div>
          <div className="postBottomRight">
            <spoan className="postCommentText">9 comments</spoan>
          </div>
        </div> */}
      </div>
    </div>
  );
}