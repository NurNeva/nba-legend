import React, { useState } from 'react';
import "./_playerCard.scss";

const PlayerCard = ({ info }) => {
  const [showStats, setShowStats] = useState(false);

  return (

    <div onClick={() => setShowStats(!showStats)} className="player-container">
      {showStats ? (
        <ul className="statistics">
          {info.statistics.map((data, index) => {
            return <li key={index}>⭐️ {data}</li>;
          })}
        </ul>
      ) : (
        <div className='images'>
          <img src={info.img} alt="" />
          <h3>{info.name}</h3>
        </div>
      )}
    </div>
   
  );
};

export default PlayerCard;