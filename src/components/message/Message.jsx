import React from 'react';
import './message.css';

export default function Message({ own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img src={PF + 'person/2.jpeg'} alt="" className="messageImg" />
        <p className="messageText">
          Dolorem praesentium veritatis occaecati! Eaque class rem? Elit expedita risus ut! Adipisci
          voluptatem maiores aliquet, dapibus magni officiis, velit mus incididunt pretium?
        </p>
      </div>
      <div className="messageBottom">10 minutes ago</div>
    </div>
  );
}
