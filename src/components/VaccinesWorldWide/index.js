import React, { useEffect, useState } from 'react';
import './Vaccines.scss';
import Disease from '../../Disease';
import Map from '../Map';

export default () => {
  const [vaccinesCountries, setVaccinesCountries] = useState([]);
  useEffect(async () => {
    const vaccineInfos = await Disease.getVaccineInfo();
    const verifyName = (name) => {
      if (name === 'USA') {
        return 'United States';
      } if (name === "Côte d'Ivoire") {
        return 'Ivory Coast';
      } if (name === 'Libyan Arab Jamahiriya') {
        return 'Libya';
      }
      return name;
    };
    setVaccinesCountries([['Country', 'Vaccines'], ...vaccineInfos.map((item) => [verifyName(item.country), ...Object.values(item.timeline)])]);
  }, []);
  const optionsMap = {
    colorAxis: { colors: ['darkgrey', 'green'] },
    backgroundColor: '#fff',
    datalessRegionColor: '#000',
    defaultColor: '#f5f5f5',
    legend: 'none',
  };

  return (
    <div className="vaccines-page">
      <div className="map-container">
        <div className="map-title">
          <h1>
            | <span className="vaccines">Vaccines</span> in all Countries
          </h1>
        </div>
        <div className="map-subcontainer">
          {vaccinesCountries.length && <Map data={vaccinesCountries} options={optionsMap} width="98%" height="100%" />}
        </div>
      </div>
    </div>
  );
};
