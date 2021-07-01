import React, { useEffect, useState } from 'react';
import Disease from '../../Disease';
import ChartMain from '../PieChart';
import Options from './ConfigsPieChart';
import {
  ChartBox, HomePageMain, HomePageSection, Infos, CardInfo,
} from './StyleMain';
import {
  CovidDetail, HeadingPrimary, HeadingSecondary, ValueDetail,
} from '../ReusableStyles';

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
    <HomePageMain>
      <HomePageSection>
        <div>
          <HeadingPrimary>
            | <CovidDetail>Covid</CovidDetail> Today
          </HeadingPrimary>
        </div>
        <Infos>
          {covidContinentData.map((item) => (
            <CardInfo>
              <HeadingSecondary>
                {item.continent === 'Australia-Oceania'
                  ? 'Oceania'
                  : item.continent}
              </HeadingSecondary>
              <p>
                Today cases: <ValueDetail>{item.todayCases.toLocaleString('pt-BR')}</ValueDetail>
              </p>
              <p>
                Today deaths: <ValueDetail>{item.todayDeaths.toLocaleString('pt-BR')}</ValueDetail>
              </p>
              <p>
                Today recovered: <ValueDetail>{item.todayRecovered.toLocaleString('pt-BR')}</ValueDetail>
              </p>
            </CardInfo>
          ))}
        </Infos>
        {covidContinentData.length === 6 && (
          <ChartBox>
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
          </ChartBox>
        )}
      </HomePageSection>
    </HomePageMain>
  );
};
