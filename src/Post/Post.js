import React, { useRef, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import SendIcon from "@mui/icons-material/Send";
// import insta_comment from '../assests/insta_comment.png'
// import insta_share from '../assests/insta_share.png'
// import insta_comment "../../"
import insta_comment from "../assests/insta_comment.png"
import insta_share from "../assests/insta_share.png";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import download from '../assests/download.jpeg'
import download2 from '../assests/download2.jpeg'
import download3 from '../assests/download3.jpeg'
import omama from "../assests/omama.jpeg"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import ads2 from "../assests/ads2.mp4";
import ads from "../assests/ads.mp4"
import boy from "../assests/boy.png"
import dp from "../assests/dp.png"
const Post = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch((error) => {
              console.error("Error attempting to play video:", error);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <div>
<div className="post">
      <div className="postInfo">
        <img
          className="postInfoImg"
         src= {download2}
          
          alt="img"
        />
        <div className="postInfousername">barackobama</div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
        <img
          className="postImage"
          src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
          alt="post_img"
        />
      </div>
      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">barackobama</div>
        <div className="InfoComment">Hard work never brings fatigue!!</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>

      </div>

        {/* Second Post */}


  <div className="post">
      <div className="postInfo">
        <img
          className="postInfoImg"
          src= {boy}
          alt="img"
        />
        <div className="postInfousername">cotton_bro </div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
  <video
    className="postImage"
    src={ads2}
    autoPlay
    muted
    loop
    playsInline
    controls={false} // Hide controls for simplicity
    // style={{ width: '100%', height: 'auto' }} // Ensure video is properly sized
    alt="post_video"
  >
   
  </video>
</div>

      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">cotton_bro  </div>
        <div className="InfoComment">Google Ads..</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>
</div>

      {/* 3rd Post */}
      <div className="post">

      <div className="postInfo">
        <img
          className="postInfoImg"
          src= "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          alt="img"
        />
        <div className="postInfousername">barackobama </div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
        <img
          className="postImage"
          src={omama}
          alt="post_img"
        />
      </div>
      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">barackobama </div>
        <div className="InfoComment">“The sacred cause of this country is larger..</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>

     
</div>
   {/* 4th Post */}
   
   <div className="post">
   <div className="postInfo">
        <img
          className="postInfoImg"
          src= "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          alt="img"
        />
        <div className="postInfousername">watergate_scandal </div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
        <img
          className="postImage"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqaaEXTxba_cDPjtovG8AfmP_r_fL3W1xgGuZvRBlhz7kFYzQv"
          alt="post_img"
        />
      </div>
      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">watergate_scandal  </div>
        <div className="InfoComment">Bob Woodard, one of the Washington Post..</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>
</div>

{/* 5th post */}
<div className="post">
<div className="postInfo">
        <img
          className="postInfoImg"
          src= {dp}
          alt="img"
        />
        <div className="postInfousername">cotton_bro </div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
  <video
    className="postImage"
    src={ads}
    autoPlay
    muted
    loop
    playsInline
    controls={false} // Hide controls for simplicity
    // style={{ width: '100%', height: 'auto' }} // Ensure video is properly sized
    alt="post_video"
  
  >
   
  </video>
</div>

      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">cotton_bro  </div>
        <div className="InfoComment">Google Ads..</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>
</div>
       {/* 6th Post */}
       <div className="post">
   <div className="postInfo">
        <img
          className="postInfoImg"
          src= "https://keralakaumudi.com/web-news/2024/08/NMAN0518455/image/baiden.1668369179.jpg"
          alt="img"
        />
        <div className="postInfousername">vp44
        </div>
        <div className="timingInfo">. 36 min</div>
      </div>
      <div className="postImg">
        <img
          className="postImage"
          src={download}
          alt="post_img"
        />
      </div>
      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          {/* <img className="insta_message1" src={insta_comment} alt="insta_msg" />
          <img className="insta_share" src={insta_share} alt="insta_reel" /> */}
          <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
          <SendIcon sx={{ fontSize: "25px" }} />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZisIqdLFTjIj4VhyzmS5wlsGLOakLpz28dX5tJyYt0zP5j6TQ"
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Auo3SvCkU5bbulU2QpvkORpvTBFQAthiw&s"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>
      <div className="postAbout">
        <div className="postAboutName">vp44
        </div>
        <div className="InfoComment">You can look from the Arctic  to the Antarctic..</div>
      </div>

      <div className="noOfComment">View All 467 Comments</div>
      <div className="addComment">Add a comment...</div>
  </div>

    </div>
    
      

    
  );
};

export default Post;
