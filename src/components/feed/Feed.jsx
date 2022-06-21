import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/62afb569e5f51401c5080587');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}
