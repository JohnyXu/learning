import React, { useRef } from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TagIcon from '@mui/icons-material/Tag';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      console.log('fileName:', fileName);
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;

      try {
        await axios.post('/upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
            alt=""
            className="shareProfileImg"
          />
          <input
            ref={desc}
            placeholder={"What's your mind " + user.username + ' ?'}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <div className="shareOptionText">Photo or Video</div>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
