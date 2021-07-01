import styled from 'styled-components';
import {
  darkText, covid, shadow, boxesAndCards,
} from './Variables';

export const H1 = styled.h1`
  color: ${darkText};
  margin: 25px 0;
  font-size: 22pt;
`;
export const H2 = styled.h2`
  color: ${darkText};
  margin-bottom: 10px;
`;
export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
`;
export const ValueDetail = styled.span`
  color: ${darkText};
`;
export const CovidDetail = styled.span`
  color: ${covid};
`;
export const ChartsSubcontainer = styled.div`
  box-shadow: ${shadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: ${boxesAndCards};
  border-radius: 5px;
`;
