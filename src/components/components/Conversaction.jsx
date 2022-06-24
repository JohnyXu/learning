import React from 'react';
import './conversation.css';

export default function Conversaction() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img src={PF + 'person/1.jpeg'} alt="" className="conversationImg" />
      <span className="conversationName">John Doe</span>
    </div>
  );
}
