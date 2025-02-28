import React, { useState } from 'react'
import '../../Style/Edit.css'
import { Link } from 'react-router-dom'
import { Textarea } from '@chakra-ui/react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const EditProfile = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [customGender, setCustomGender] = useState("");

  const handleGenderChange = (e)=>{
    setSelectedGender(e.target.value);
    if(e.target.value === "other") setCustomGender("");
  }
  return (
    <div className='main-top'>
      <div className="edtprf">
        <h2>Edit Profile</h2>
      </div>
      <div className='profile-content'>
      <div className="profile">
        <div className='prcnt'>
        <img src="https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2684/files/2021/12/nikki-budzinski-21.jpeg"
           alt='profile' className='profile-img'/>
       
  
      <div className="content">
      <h4>__nikki_Budzinski</h4>
      </div>
      </div>
      <div className='edt-btn'> 
      <button className='change-profile-btn'>Change Profile</button>
      </div>
      </div>
      </div>
       <div className="bio">
        <h3>Bio</h3>
        <Textarea className="txt-bio"size="lg" name="Size"     />
       </div>
       <div className="gender">
        <h3>Gender</h3>
        <select name="gender-category" id="gender"value={selectedGender} onChange={handleGenderChange}>
        <option value="" disabled selected hidden>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {selectedGender === "other" && (
          <input type="text" placeholder="Enter your specify" 
          value={customGender}
          onChange={(e)=>setCustomGender(e.target.value)}
          className='custom-gender-input'/>
        )}
        
       </div>
       <div className="act-prvcy">
        <h3>Account Privacy</h3>
        {/* <Textarea className="txt-bio"size="lg" name="Size"     /> */}
        <div className='prvt-prvcy'>
          Private Account 
          <div className='abcdefg'>  <p>When your account is public, your profile and posts can be seen by anyone, on or off Instagram, </p> 
          <p>even if they don't have an Instagram account.</p>
          <p>When your account is private, only the followers you approve can see what you share, including</p>
          <p>your photos or videos on hashtag and location pages, and your followers and following lists.</p>
          <p>Certain info on your profile, like your profile picture and username, is visible to everyone on and </p>
          <p>off Instagram. <Link>Learn more</Link></p>
  
  </div>
  <div className='frm-cntrl'>
       <FormGroup>
    
    
    <FormControlLabel required control={<Switch />} label="Required" />

  </FormGroup></div> 
        </div>
       </div>
       
    </div>
  )
}

export default EditProfile
