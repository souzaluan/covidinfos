import styled from 'styled-components';
import {
  boxesAndCards, darkText, lightText, shadow,
} from '../Variables';

export const InfosContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const InfosSection = styled.section`
  display: flex;
  margin: 50px 0;
  justify-content: space-around;
  width: 85%;
`;
export const Card = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${boxesAndCards};
  border-radius: 5px;
  color: ${lightText};
  line-height: 25px;
  box-shadow: ${shadow};
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${darkText};
`;
export const CountryTitle = styled(Title)`
  width: 95px;
`;
export const CasesTitle = styled(Title)`
  justify-content: space-between;
  width: 160px;
`;
export const HeadingSecondary = styled.h2`
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Flag = styled.img`
  margin-left: 12px;
  width: 26px;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;
