import React from 'react'
import { Link } from 'react-router-dom';
import '../../Style/Settings.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Settings = () => {
  return (
    <div className='ryt-top'>
    <div className='ryt-main'>
    <h3>Settings</h3>
    
    <div className="navLinkPart">
      
        <div className="navLink">
          <AccountCircleOutlinedIcon  sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName"> Edit Profile</div>
        </div>
        <div className="navLink">
          <BlockOutlinedIcon  sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Block</div>
        </div>
        <div className="navLink">
          <LockOutlinedIcon  sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Account Privacy</div>
        </div>
     
       
      </div>
    </div>
 
    </div>
  )
}

export default Settings
