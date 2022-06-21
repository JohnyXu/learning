import React from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TagIcon from '@mui/icons-material/Tag';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={PF + 'person/1.jpeg'} alt="" className="shareProfileImg" />
          <input placeholder="What's your mind Johny?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <div className="shareOptionText">Photo or Video</div>
            </div>
            <div className="shareOption">
              <TagIcon htmlColor="blue" className="shareIcon" />
              <div className="shareOptionText">Tag</div>
            </div>
            <div className="shareOption">
              <AddLocationIcon htmlColor="green" className="shareIcon" />
              <div className="shareOptionText">Location</div>
            </div>
            <div className="shareOption">
              <InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon" />
              <div className="shareOptionText">Feelings</div>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
