import React, { useEffect, useState } from 'react';
import {
  WorldWidePage,
  TitleSelect,
  SelectContainer,
  Select,
  ChartMapSubcontainer,
  CardsSubcontainer,
  Card,
  LinechartContainer,
  LinechartBox,
} from './StyleWorldWide';
import {
  ContainerStyle, CovidDetail, HeadingPrimary, HeadingSecondary, ValueDetail, ChartsSubcontainer,
} from '../ReusableStyles';
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
    <WorldWidePage>
      <ContainerStyle>
        <TitleSelect>
          <div>
            <HeadingPrimary>
              | <CovidDetail>Covid</CovidDetail> in all Countries
            </HeadingPrimary>
          </div>
          <SelectContainer>
            <Select onChange={(e) => updateInfosCountries(e.target.value)}>
              <option value="cases" selected>Cases</option>
              <option value="deaths">Deaths</option>
              <option value="recovered">Recovered</option>
            </Select>
          </SelectContainer>
        </TitleSelect>
        <ChartMapSubcontainer>
          {infosCountries.length && <Map data={infosCountries} options={configsMap} width="98%" height="100%" />}
        </ChartMapSubcontainer>
      </ContainerStyle>
      <ContainerStyle>
        <div>
          <HeadingPrimary>
            | <CovidDetail>Covid</CovidDetail> in WorldWide
          </HeadingPrimary>
        </div>
        {worldwideInfos.length !== 0
                    && (
                    <CardsSubcontainer>
                      <Card>
                        <div><HeadingSecondary>Cases</HeadingSecondary></div>
                        <p>
                          Total: <ValueDetail>{worldwideInfos.cases.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                        <p>
                          Active: <ValueDetail>{worldwideInfos.active.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                        <p>
                          Critical: <ValueDetail>{worldwideInfos.critical.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                        <p>
                          Today: <ValueDetail>{worldwideInfos.todayCases.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                      </Card>
                      <Card>
                        <div><HeadingSecondary>Deaths</HeadingSecondary></div>
                        <p>
                          Total: <ValueDetail>{worldwideInfos.deaths.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                        <p>
                          Today: <ValueDetail>{worldwideInfos.todayDeaths.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                      </Card>
                      <Card>
                        <div><HeadingSecondary>Recovered</HeadingSecondary></div>
                        <p>
                          Total: <ValueDetail>{worldwideInfos.recovered.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                        <p>
                          Today: <ValueDetail>{worldwideInfos.todayRecovered.toLocaleString('pt-BR')}</ValueDetail>
                        </p>
                      </Card>
                    </CardsSubcontainer>
                    )}
      </ContainerStyle>
      <LinechartContainer>
        <TitleSelect>
          <div>
            <HeadingPrimary>
              | <CovidDetail>Covid</CovidDetail> in WorldWide - Timeline
            </HeadingPrimary>
          </div>
          <SelectContainer>
            <Select onChange={(e) => updateTimelineType(e.target.value)}>
              <option value="cases" selected>Cases</option>
              <option value="deaths">Deaths</option>
              <option value="recovered">Recovered</option>
            </Select>
          </SelectContainer>
        </TitleSelect>
        <ChartsSubcontainer>
          <LinechartBox><LineChart data={timelineType} options={configsLineChart} /></LinechartBox>
        </ChartsSubcontainer>
      </LinechartContainer>
    </WorldWidePage>
  );
};
