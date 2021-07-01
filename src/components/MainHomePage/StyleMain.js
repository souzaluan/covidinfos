import styled from 'styled-components';
import {
  boxesAndCards, lightText, shadow,
} from '../Variables';

export const HomePageMain = styled.main`
  width: 80%;
  height: 100%;
  margin-left: 20%;
`;
export const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
`;
export const Infos = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CardInfo = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 250px;
  background-color: ${boxesAndCards};
  border-radius: 5px;
  justify-content: center;
  box-shadow: ${shadow};
  color: ${lightText};
  line-height: 25px;
`;
export const ChartBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${boxesAndCards};
  border-radius: 5px;
  box-shadow: ${shadow};
  margin-bottom: 30px;
  padding-top: 20px;
`;
