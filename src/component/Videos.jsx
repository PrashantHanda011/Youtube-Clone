import React from "react";
import  VerifiedUser  from "@material-ui/icons/VerifiedUser";

import '../style/videos.css'
function Videos() {
  return (
    <div className="videos">
      <div className="video-thumbnail">
        <img src="https://i.ytimg.com/vi/45PR60pF_6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs0s9cnOZ-6nR0iySyGrFsiRYcog" alt="" />
        <p>2:25</p>
      </div>

      <div className="videos-detail">
        <img src="https://yt3.ggpht.com/ytc/AKedOLT4PPnGyS1r_YWd3pla3opAt-Do6POSeMe2xWrt=s68-c-k-c0x00ffffff-no-rj" alt="" />
       <div className='details'>
        <h6>Distance Love - Zehr Vibe | Yaari Ghuman | New Punjabi Song 2021 </h6>
        <p>Jatt Life Studios</p>
        <h5>200k <span>views</span> <span>•</span> <span>1 month ago</span> </h5>
        
        </div>
      </div>
    </div>
  );
}

export default Videos;
