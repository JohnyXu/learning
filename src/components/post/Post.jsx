import React, { useEffect, useState } from 'react';
import './post.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { format } from 'timeago.js';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user?.profilePicture || PF + 'person/noAvatar.png'}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{format(post.createdAt, 'en_US')}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={PF + 'like.png'} alt="" className="likeIcon" onClick={likeHandler} />
            <img src={PF + 'heart.png'} alt="" className="likeIcon" />
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
