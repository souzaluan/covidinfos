/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Icon from '@material-ui/icons/Search';
import {
  HeadingPrimary,
  Interface,
  SearchContainer,
  Search, SearchBar,
  Input,
  Button,
  Title,
} from './SearchStyle';
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
    <SearchContainer>
      <Interface>
        <Title>
          <HeadingPrimary>Enter the desired country</HeadingPrimary>
        </Title>
        <Search>
          <SearchBar>
            <Input type="text" onChange={(e) => e.target && onSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && searchFunction()} />
            <Button
              onClick={searchFunction}
              role="button"
              tabIndex="0"
            >
              <Icon style={{ fontSize: '25px' }} />
            </Button>
          </SearchBar>
        </Search>
        {countryInfos && <InfosOfCountry info={countryInfos} />}
      </Interface>
    </SearchContainer>
  );
};
