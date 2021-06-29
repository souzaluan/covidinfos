import React, { useEffect, useState } from 'react';
import './WorldWide.scss';
import Disease from '../../Disease';
import Map from '../Map';
import OptionsMap from './ConfigsMap';
import LineChart from '../LineChart';
import OptionsLineChart from './ConfigsLineChart';

export default () => {
  const [configsMap, setConfigsMap] = useState([]);
  const [timelineType, setTimelineType] = useState([]);
  const [configsLineChart, setConfigsLineChart] = useState([]);
  const [worldwideInfos, setWorldwideInfos] = useState([]);
  const [infosCountries, setInfosCountries] = useState([]);

  const populateTimelineData = async () => {
    const timeline = await Disease.getTimelineInfo();
    setTimelineType([['date', 'Cases'], ...Object.entries(timeline.cases)]);
    setConfigsLineChart(OptionsLineChart.cases_deaths);
  };
  const updateTimelineType = async (type) => {
    const timeline = await Disease.getTimelineInfo();
    setTimelineType([['date', `${type.charAt(0).toUpperCase() + type.slice(1)}`], ...Object.entries(timeline[`${type}`])]);
    if (type === 'recovered') {
      setConfigsLineChart(OptionsLineChart.recovered);
    } else {
      setConfigsLineChart(OptionsLineChart.cases_deaths);
    }
  };
  const populateWorldWideInfos = async () => {
    setWorldwideInfos(await Disease.getWorldWideInfo());
  };
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
  const populateInfosCountries = async () => {
    const allCountriesInfo = await Disease.getAllCountryInfo();
    const data = allCountriesInfo.map((item) => [`${verifyName(item.country)}`, item.cases]);
    setInfosCountries([['Country', 'Cases'], ...data]);
    setConfigsMap(OptionsMap.cases_deaths);
  };
  const updateInfosCountries = async (dataType) => {
    const allCountriesInfo = await Disease.getAllCountryInfo();
    const data = allCountriesInfo.map((item) => [`${verifyName(item.country)}`, item[`${dataType}`]]);
    setInfosCountries([['Country', `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`], ...data]);
    if (dataType === 'recovered') {
      setConfigsMap(OptionsMap.recovered);
    } else {
      setConfigsMap(OptionsMap.cases_deaths);
    }
  };

  useEffect(async () => {
    populateWorldWideInfos();
    populateTimelineData();
    populateInfosCountries();
  }, []);
  return (
    <div className="worldwide-page">
      <div className="map-container">
        <div className="map-title-select">
          <div className="map-title title">
            <h1>
              | <span className="covid">Covid</span> in all Countries
            </h1>
          </div>
          <div className="select-container">
            <select onChange={(e) => updateInfosCountries(e.target.value)}>
              <option value="cases" selected>Cases</option>
              <option value="deaths">Deaths</option>
              <option value="recovered">Recovered</option>
            </select>
          </div>
        </div>
        <div className="map-subcontainer">
          {infosCountries.length && <Map data={infosCountries} options={configsMap} width="98%" height="100%" />}
        </div>
      </div>
      <div className="cards-container">
        <div className="cards-title title">
          <h1>
            | <span className="covid">Covid</span> in WorldWide
          </h1>
        </div>
        {worldwideInfos.length !== 0
                    && (
                    <div className="cards-subcontainer">
                      <div className="card-worldwide cases">
                        <div className="card-title"><h2>Cases</h2></div>
                        <p>
                          Total: <span className="number">{worldwideInfos.cases.toLocaleString('pt-BR')}</span>
                        </p>
                        <p>
                          Active: <span className="number">{worldwideInfos.active.toLocaleString('pt-BR')}</span>
                        </p>
                        <p>
                          Critical: <span className="number">{worldwideInfos.critical.toLocaleString('pt-BR')}</span>
                        </p>
                        <p>
                          Today: <span className="number">{worldwideInfos.todayCases.toLocaleString('pt-BR')}</span>
                        </p>
                      </div>
                      <div className="card-worldwide deaths">
                        <div className="card-title"><h2>Deaths</h2></div>
                        <p>
                          Total: <span className="number">{worldwideInfos.deaths.toLocaleString('pt-BR')}</span>
                        </p>
                        <p>
                          Today: <span className="number">{worldwideInfos.todayDeaths.toLocaleString('pt-BR')}</span>
                        </p>
                      </div>
                      <div className="card-worldwide recovered">
                        <div className="card-title recovered"><h2>Recovered</h2></div>
                        <p>
                          Total: <span className="number">{worldwideInfos.recovered.toLocaleString('pt-BR')}</span>
                        </p>
                        <p>
                          Today: <span className="number">{worldwideInfos.todayRecovered.toLocaleString('pt-BR')}</span>
                        </p>
                      </div>
                    </div>
                    )}
      </div>
      <div className="linechart-container">
        <div className="linechart-title-select">
          <div className="linechart-title title">
            <h1>
              | <span className="covid">Covid</span> in WorldWide - Timeline
            </h1>
          </div>
          <div className="select-container">
            <select onChange={(e) => updateTimelineType(e.target.value)}>
              <option value="cases" selected>Cases</option>
              <option value="deaths">Deaths</option>
              <option value="recovered">Recovered</option>
            </select>
          </div>
        </div>
        <div className="linechart-subcontainer">
          <div className="linechart"><LineChart data={timelineType} options={configsLineChart} /></div>
        </div>
      </div>
    </div>
  );
};
