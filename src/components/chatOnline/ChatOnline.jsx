import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './chatOnline.css';

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get('/users/friends/' + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
      console.log(res.data);
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => {
        return (
          <div
            key={o._id}
            className="chatOnlineFriend"
            onClick={() => {
              handleClick(o);
            }}
          >
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src={o?.profilePicture ? PF + o.profilePicture : PF + 'person/noAvatar.png'}
                alt=""
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{o?.username}</span>
          </div>
        );
      })}
    </div>
  );
}
