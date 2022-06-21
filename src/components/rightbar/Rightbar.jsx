import React from 'react';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import './rightbar.css';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={PF + 'gift.png'} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Sarah</b>&nbsp; and &nbsp;<b> 2 other friends</b> have a birthday today
          </span>
        </div>
        <img src={PF + 'ad.png'} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relation:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : '-'}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map((u) => {
            return (
              <div key={u.id} className="rightbarFollowing">
                <img src={PF + u.profilePicture} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">{u.username}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{user ? <ProfileRightbar /> : <HomeRightbar />}</div>
    </div>
  );
}
