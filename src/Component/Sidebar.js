import React, { useState, useRef, useEffect } from "react";
import "../css/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddBoxOutLinedIcon from "@mui/icons-material/AddBoxOutlined";
import GestureIcon from "@mui/icons-material/Gesture";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Popper, Box, Typography } from '@mui/material';
import { IoSettingsOutline } from "react-icons/io5";
import main_logo1 from "../assests/insta_logo.png";
import { GoReport } from "react-icons/go";
import UploadModal from "./UploadModal"
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const anchorRef = useRef(null);
  const popperRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenModal = ()=>{
    setOpenModal(true);
  }
  const handleCloseModal = ()=>{
    setOpenModal(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popperRef.current && !popperRef.current.contains(event.target) &&
        anchorRef.current && !anchorRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <Link to="/">
          <img className="logoImg" src={main_logo1} alt="Instagram Logo" />
        </Link>
      </div>
      <div className="navLinkPart">
        <Link to="/" className="navLink">
          <HomeIcon sx={{ fontSize: "30px",color:"#000", margin: "0 20px 0 0" }} />
          <div className="navName">Home</div>
        </Link>
        <div className="navLink">
          <SearchIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <ExploreIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Explore</div>
        </div>
        <div className="navLink">
          <MusicVideoIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Reels</div>
        </div>
        <div className="navLink">
          <EmailOutlinedIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Messages</div>
        </div>
        <div className="navLink">
          <FavouriteBorderOutlinedIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink" onClick={handleOpenModal} style={{cursor:'pointer'}}>
          <AddBoxOutLinedIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Create</div>
        </div>
        <Link to="/profile" className="navLink">
          <img
            className="profileImg"
            src="https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2684/files/2021/12/nikki-budzinski-21.jpeg"
            alt="profile"
          />
          <div className="navName">Profile</div>
        </Link>
        <div className="belowPart">
          <div className="navLink">
            <GestureIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
            <div className="navName">Thread</div>
          </div>
          <div className="navLink" ref={anchorRef} onClick={handleToggle} style={{ cursor: 'pointer' }}>
            <MenuIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
            <div className="navName">Moreee</div>
          </div>
        </div>
      </div>

      {/* Dropdown options */}
      <Popper ref={popperRef} open={open} anchorEl={anchorRef.current} onClose={handleClose}>
        <Box className="otrg_bx" sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          boxShadow: 3,
          width: "210px",
          margin: "10px",
          p: 2,
        }}>
          <Typography className="Sttng_optn paddnop" variant="h6" component="div">
            <IoSettingsOutline sx={{ fontSize: "30px", margin: "0 20px 0 0", marginRight: "20px" }} />
            Settings
          </Typography>
          <Typography className="rpt-optn paddnop" variant="h6" component="div">
            <GoReport sx={{ fontSize: "30px", margin: "0 20px 0 0", marginRight: "20px" }} />
            Report
          </Typography>
          <Typography className="logt_optn paddnop" variant="h6" component="div">
            Log out
          </Typography>
        </Box>
      </Popper>

      {/* Upload Modal */}
      <UploadModal open={openModal} onClose={handleCloseModal} />

    </div>
  );
};

export default Sidebar;
