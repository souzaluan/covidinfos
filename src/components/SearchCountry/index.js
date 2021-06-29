/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Search.scss';
import Search from '@material-ui/icons/Search';
import Disease from '../../Disease';
import InfosOfCountry from '../InfosOfCountry';

export default () => {
  const [countryInfos, setCountryInfos] = useState(null);
  const [search, onSearch] = useState(null);
  const searchFunction = async () => {
    if (search) {
      const data = await Disease.getCountryInfo(search);
      setCountryInfos(data);
    }
  };
  return (
    <div className="search-container">
      <div className="interface">
        <div className="title">
          <h1>Enter the desired country</h1>
        </div>
        <section className="search">
          <div className="searchbar">
            <input type="text" onChange={(e) => e.target && onSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchFunction()} />
            <div
              className="searchbar-button"
              onClick={searchFunction}
              role="button"
              tabIndex="0"
            >
              <Search style={{ fontSize: '25px' }} />
            </div>
          </div>
        </section>
        {countryInfos && <InfosOfCountry info={countryInfos} />}
      </div>
    </div>
  );
};
