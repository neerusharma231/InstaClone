import React from 'react';
import {Link} from 'react-router-dom'
import '../../Style/Profile.css';
import SendIcon from "@mui/icons-material/Send";
import EditProfile from './EditProfile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
const Profile = () => {
  return (
    <div className='main'>
      <div className='main1'>

     
      <div className='profilemain'>
        <div>
          <img className="profileImg1"
            src='https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2684/files/2021/12/nikki-budzinski-21.jpeg
         '
            alt="Profile"
          />
        </div>
        <div className='abcs'>
        <div className="edit_profile">
        <h4>__nikki_Budzinski</h4>
          <Link to="/editprofile">
          <button className="edit_button">Edit Profile</button>
          </Link>
   
   
</div>
          
          <div className='post_sections'>
            <h5>40 posts</h5>
            <h5>1,027  followers</h5>
            <h5>111 following</h5>
          </div>
          <div className="userFullName1">Nikki Budzinski</div>
          <div className="userFullName1"><p>I’m an Illinoisan, a proud aunt and dog mom, and an @Illini_Pride alum. Fighting for working families and to keep #IL13 blue!</p></div>
        </div>
        
      </div>
      <div className='taggs'>
        <div  className='taggss' ><ListOutlinedIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }}/>Post </div>
        
        <div  className='taggsss'>  <MusicVideoIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />Reels </div>
        
     <div  className='tagggs'>  < AccountBoxOutlinedIcon  sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />Tagged</div>
     </div>
     
      <div className='gallery'>
    
        <div className="gallery-item">
          <img 
            className="item" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJ77Y5BtEnx_LJMDWhztOX1p5PZNSL8yOobU2aI7Wzym3blc8'
            alt="Gallery 1"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
              <FavoriteIcon  sx={{ fontSize: "25px" }} />51
              <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item1" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQNKVO0OXA49YvwJuhxhBArjlL1nwx2Y3uERnBhQ5NaMJfxKB'
            alt="Gallery 2"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item2" 
            src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLEIKd1AZnvmZeA0imk3V5H69oV3gKYenKz1H5LJYb2jH8NYWx'
            alt="Gallery 3"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>
        <div className="gallery-item">
          <img 
            className="item" 
            src='https://pbs.twimg.com/media/GN8v57aWIAA211I.jpg:large'
            alt="Gallery 1"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item3" 
            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQL-MTtLQ9aM1gKbBh_PI3P0hHq7YjXCuM7C6lur74YRdCi0zfe'
            alt="Gallery 2"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item4" 
            src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyV9IIUaPTiXRAlJXGsmcR1Z-PdW-rpVC8hLJQdmOv_20ZSUkA'
            alt="Gallery 3"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>
        <div className="gallery-item">
          <img 
            className="item" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJ77Y5BtEnx_LJMDWhztOX1p5PZNSL8yOobU2aI7Wzym3blc8'
            alt="Gallery 1"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div> 
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQNKVO0OXA49YvwJuhxhBArjlL1nwx2Y3uERnBhQ5NaMJfxKB'
            alt="Gallery 2"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>

        <div className="gallery-item">
          <img 
            className="item5" 
            src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAoHcKbF6X7N4bRTxzvcQixXcirVU7mBDl6DjF7SC-WEEdxg7G'
            alt="Gallery 3"
          />
          <div className="iconsBlock1">
            <div className="leftIcon1">
            <FavoriteIcon sx={{ fontSize: "25px" }} />51
            <ModeCommentIcon sx={{ fontSize: "25px" }} />100
              {/* <SendIcon sx={{ fontSize: "25px" }} /> */}
            </div>
            {/* <div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
