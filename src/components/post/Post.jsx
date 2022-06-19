import React from 'react';
import './post.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">Johny Lee</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey, It's my first post</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon" />
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">10 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
