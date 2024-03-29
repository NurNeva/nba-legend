import React, { useState } from 'react';
import image from '../images/nba-logo.png'; 
import './_header.scss';
import { data } from "../helper/data";
import PlayerCard from './PlayerCard'; // PlayerCard bileşenini içeri aktarıyoruz

const Header = () => {
  const [searchbar, setSearchbar] = useState('');

  const handleSearchbar = (e) => {
    setSearchbar(e.target.value.toLowerCase());
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchbar)
  );

  return (
    <div className='header-container'>
      <img src={image} alt="" />
      <h1>NBA Legend</h1>
      <input 
        type="text" 
        placeholder="Search Player..."
        value={searchbar} 
        onChange={handleSearchbar}
      />

    
      {filteredData.length > 0 && (
        <div className="card-container">
          {filteredData.map((info) => (
            <PlayerCard 
              key={info.id} 
              info={info} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;