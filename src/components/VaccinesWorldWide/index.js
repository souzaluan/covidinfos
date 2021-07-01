import React, { useEffect, useState } from 'react';
import { VaccinesPage, VaccinesDetail, ChartVaccinesSubcontainer } from './VaccinesStyle';
import { H1, ContainerStyle } from '../ReusableStyles';
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
    <VaccinesPage>
      <ContainerStyle>
        <div>
          <H1>
            | <VaccinesDetail>Vaccines</VaccinesDetail> in all Countries
          </H1>
        </div>
        <ChartVaccinesSubcontainer>
          {vaccinesCountries.length && <Map data={vaccinesCountries} options={optionsMap} width="98%" height="100%" />}
        </ChartVaccinesSubcontainer>
      </ContainerStyle>
    </VaccinesPage>
  );
};
