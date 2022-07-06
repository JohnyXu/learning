import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './conversation.css';

export default function Conversaction({ conversation, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation?.memmbers.find((m) => m === currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios('/users?userId=' + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    friendId && getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        src={user?.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
