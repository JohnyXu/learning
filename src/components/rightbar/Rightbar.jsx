import React from 'react';
import './rightbar.css';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Sarah</b>&nbsp; and &nbsp;<b> 2 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Dou</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Dou</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Dou</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Dou</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Dou</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
