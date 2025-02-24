import React  from "react";
import "./css/signup.css";
import Logo from "../assests/insta_logo.png";
import { Link } from "react-router-dom";
const SignUp = () => {
 
  return (
    <>
    <div className="sign-head">
    
      <div className="sign-header">
        <div className="sign-content"> 
        <div className="logn-inner-content">
          <img src={Logo} alt="insta_logo" className="instas-logo" />
        </div>
        <div className="sgn-content">
            <span>Sign up to see photos and videos from your friends.</span>
          </div>
        <div className="sgn-frm">
            <input type="text" className="txted"
            placeholder="Phone number or email"/>
          <input type="password" className="txted"
            placeholder="Password"/>
             <input type="password" className="txted"
            placeholder="Full Name"/>
             <input type="text" className="txted"
            placeholder="Username"/>
             <div className="under-sgnup-detail">
            <p>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a></p>
            <p>By signing up, you agree to our 
              <Link href="#">Terms</Link>, 
              <Link href="#">Privacy Policy</Link>
               and <Link href="#">Cookies Policy</Link>.</p>
          </div>
          <button className="sgnup-btn">Sign Up</button>
          </div>
          
          </div>
          <div className="sgnup-section">
          <p>Have an account? </p>
          <Link className="lgning-upp" href="/">Log in</Link>
       
           </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;
