import React, { useEffect, useState } from 'react';
import Disease from '../../Disease';
import ChartMain from '../PieChart';
import Options from './ConfigsPieChart';
import './Main.scss';

export default () => {
  const [covidContinentData, setCovidContinentData] = useState([]);
  const [decreasingTodayRecovered, setDecreasingTodayRecovered] = useState([]);
  const [dataCases, setDataCases] = useState([]);
  const [dataRecovered, setDataRecovered] = useState([]);

  useEffect(async () => {
    const data = await Disease.getContinentsInfo();
    const Recovereds = data
      .map((item) => item)
      .sort((x, y) => x.todayRecovered - y.todayRecovered);
    Recovereds.reverse();
    setDecreasingTodayRecovered(Recovereds);
    const continentData = data
      .map((item) => item)
      .sort((x, y) => x.todayCases - y.todayCases);
    continentData.reverse();
    setCovidContinentData(continentData);
  }, []);

  useEffect(async () => {
    if (covidContinentData.length && decreasingTodayRecovered.length) {
      setDataCases([
        ['Continents', 'Today cases'],
        ...covidContinentData.map((item) => [
          `${item.continent}`,
          item.todayCases,
        ]),
      ]);
      setDataRecovered([
        ['Continents', 'Today covered'],
        ...decreasingTodayRecovered.map((item) => [
          `${item.continent}`,
          item.todayRecovered,
        ]),
      ]);
    }
  }, [covidContinentData, decreasingTodayRecovered]);

  return (
    <main className="homepage-container">
      <section>
        <div className="section-title">
          <h1 className="title">
            | <span className="covid">Covid</span> Today
          </h1>
        </div>
        <div className="infos">
          {covidContinentData.map((item) => (
            <div className="card-info">
              <h2>
                {item.continent === 'Australia-Oceania'
                  ? 'Oceania'
                  : item.continent}
              </h2>
              <p className="cases">
                Today cases: <span className="number">{item.todayCases.toLocaleString('pt-BR')}</span>
              </p>
              <p className="deaths">
                Today deaths: <span className="number">{item.todayDeaths.toLocaleString('pt-BR')}</span>
              </p>
              <p className="recovered">
                Today recovered: <span className="number">{item.todayRecovered.toLocaleString('pt-BR')}</span>
              </p>
            </div>
          ))}
        </div>
        {covidContinentData.length === 6 && (
          <div className="chart">
            <ChartMain
              data={dataCases}
              options={Options.cases}
              height="400px"
            />
            <ChartMain
              data={dataRecovered}
              options={Options.recovered}
              height="400px"
            />
          </div>
        )}
      </section>
    </main>
  );
};
