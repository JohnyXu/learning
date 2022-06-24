import React from 'react';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import Conversaction from '../../components/components/Conversaction';
import Message from '../../components/message/Message';
import Topbar from '../../components/topbar/Topbar';
import './messenger.css';

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder="Search for friends" className="chatMenuInput" />
            <Conversaction />
            <Conversaction />
            <Conversaction />
            <Conversaction />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message own={true} />
              <Message own={true} />
              <Message own={true} />
              <Message own={true} />
            </div>
            <div className="chatBoxBottom">
              <textarea placeholder="write something ..." className="chatMessageInput"></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
