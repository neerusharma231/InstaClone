import React, { useState, useEffect } from "react";
import "../css/login.css";
import Logo from "../assests/insta_logo.png";
import { FaFacebook } from "react-icons/fa";
import HomePhone from "../assests/home-phones.png";
import Micro from "../assests/getMicrosoft.png";
import Play from "../assests/play.png"
import ig from "../assests/ig.png";
import ig1 from "../assests/ig1.png";
import ig2 from "../assests/ig2.png";
import ig3 from "../assests/ig3.png";
import { Link } from "react-router-dom";
const Login = () => {
    const overlayImages = [ig, ig1, ig2, ig3,];
    const [currentImageIndex, setCurrentImageIndex]= useState(0);

    //change the image every 1 second
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % overlayImages.length);
       
        },2000)
    },[])
  return (
    <>
    <div className="logn-head">
    <div className="homepge" style={{ backgroundImage: `url(${HomePhone})` }}>
    <img src={overlayImages[currentImageIndex]} alt="overlay" className="overlay-img" />
    </div>
      <div className="logn-header">
        <div className="lgn-content"> 
        <div className="logn-inner-content">
          <img src={Logo} alt="insta_logo" className="insta-logo" />
        </div>
        <div className="logn-frm">
            <input type="text" className="txt"
            placeholder="Phone number, username, or email"/>
          <input type="password" className="txt"
            placeholder="Password"/>
          <button className="login-btn">Log In</button>
          </div>
          <div className="or-separator">
            <span className="line"></span>
            <span className="or-text">OR</span>
            <span className="line"></span>
          </div>
          <div className="facebook-logn">
            <FaFacebook className="facebook-icon" />
            <span>Log in with Facebook</span>
          </div>

          <div className="forgot-password">
          <Link className="frgotpass" to="/forgotpassword">
            <span className="forget-passs">
              Forgot Password?</span></Link>
          </div>
          
          </div>
            <div className="sgn-up">
                <p>Don't have account?
                </p>
                <Link className="sgn-upesd" to="/signUp">  
                <span className="sgningg-up">
                  Sign Up</span>
                  </Link>
            </div>
            <div className="get-app">
                <span>Get the App</span>
            </div>
            <div className="micro-play">
                <img src={Micro} alt="micro" className="micro"/>
                <img src={Play} alt="play" className="micro"/>
            </div>
      </div>
      </div>
    </>
  );
};

export default Login;
