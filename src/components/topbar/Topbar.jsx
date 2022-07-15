import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FlyingBird</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <div className="topbarIconContainer">
              <NotificationsNoneIcon />
              <span className="topIconBage">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
