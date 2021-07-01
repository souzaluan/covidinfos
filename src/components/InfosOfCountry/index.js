import React from 'react';
import {
  InfosContainer, InfosSection, Card, CountryTitle, CasesTitle, H2, Flag, Content, Error,
} from './InfosStyle';
import {
  ValueDetail,
} from '../ReusableStyles';

export default ({ info }) => {
  const data = info;
  return (
    <InfosContainer>
      {!data.message ? (
        <InfosSection>
          <Card>
            <CountryTitle>
              <H2>{data.country}</H2>
              <Flag src={`${data.countryInfo.flag}`} alt="Country flag" />
            </CountryTitle>
            <Content>
              <div>
                Population: <ValueDetail>{data.population.toLocaleString('pt-BR')}</ValueDetail>
              </div>
              <div>
                Continent: <ValueDetail>{data.continent}</ValueDetail>
              </div>
            </Content>
          </Card>
          <Card>
            <CasesTitle>
              <H2>Covid-19 Infos</H2>
            </CasesTitle>
            <Content>
              <div>
                Tests:  <ValueDetail>{data.tests.toLocaleString('pt-BR')}</ValueDetail>
              </div>
              <div>
                Total: <ValueDetail>{data.cases.toLocaleString('pt-BR')}</ValueDetail>
              </div>
              <div>
                Actives: <ValueDetail>{data.active.toLocaleString('pt-BR')}</ValueDetail>
              </div>
              <div>
                Recovered: <ValueDetail>{data.recovered.toLocaleString('pt-BR')}</ValueDetail>
              </div>
              <div>
                Deaths: <ValueDetail>{data.deaths.toLocaleString('pt-BR')}</ValueDetail>
              </div>
            </Content>
          </Card>
        </InfosSection>
      ) : (
        <Error>
          Oops! {data.message}.
        </Error>
      )}
    </InfosContainer>
  );
};
