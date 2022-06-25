import React from 'react';
import './message.css';

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img src={PF + 'person/2.jpeg'} alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{message.createdAt}</div>
    </div>
  );
}
