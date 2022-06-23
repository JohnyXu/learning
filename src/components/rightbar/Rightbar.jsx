import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Online from '../online/Online';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './rightbar.css';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));

  useEffect(() => {
    const getFriends = async () => {
      if (user?._id) {
        console.log('id:', user._id);
        try {
          const friendList = await axios.get('/users/friends/' + user._id);
          setFriends(friendList.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put('/users/' + user._id + '/unfollow', { userId: currentUser._id });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put('/users/' + user._id + '/follow', { userId: currentUser._id });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

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
          {friends.map((u) => {
            return <Online key={u._id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
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
          {friends.map((u) => {
            return (
              <Link to={'/profile/' + u.username} key={u._id} style={{ textDecoration: 'none' }}>
                <div className="rightbarFollowing">
                  <img
                    src={u.profilePicture ? PF + u.profilePicture : PF + 'person/noAvatar.png'}
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">{u.username}</span>
                </div>
              </Link>
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
