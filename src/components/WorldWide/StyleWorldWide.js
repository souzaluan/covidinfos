import styled from 'styled-components';
import { ContainerStyle, ChartsSubcontainer } from '../ReusableStyles';
import {
  darkText, boxesAndCards, shadow, lightText,
} from '../Variables';

export const WorldWidePage = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 20%;
`;

export const TitleSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Select = styled.select`
  font-size: 13pt;
  background-color: ${boxesAndCards};
  color: ${darkText};
  border: none;
  box-shadow: ${shadow};
  padding: 2px 5px;
  border-radius: 5px;
  outline: none;
`;
export const ChartMapSubcontainer = styled(ChartsSubcontainer)`
  align-items: center;
`;
export const CardsSubcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Card = styled.div`
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 250px;
  background-color: ${boxesAndCards};
  border-radius: 5px;
  justify-content: center;
  line-height: 25px;
  color: ${lightText};
`;
export const LinechartContainer = styled(ContainerStyle)`
  padding-bottom: 50px;
`;
export const LinechartBox = styled.div`
  margin-bottom: 50px;
`;
