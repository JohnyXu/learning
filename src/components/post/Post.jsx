import React, { useState } from 'react';
import './post.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const user = Users.find((u) => {
    return u.id === post?.userId;
  });

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user?.profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
