import styled from 'styled-components';
import { background, darkText, shadow } from '../Variables';

export const Interface = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
`;
export const SearchContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin-left: 20%;
`;
export const Search = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
export const SearchBar = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(155, 155, 155);
  border: 1px solid rgb(155, 155, 155);
  padding-left: 2px;
  width: 400px;
  height: 40px;
  box-shadow: ${shadow};
`;
export const Input = styled.input`
  border-radius: 5px;
  justify-content: start;
  width: 350px;
  padding: 0;
  border: 0;
  height: 90%;
  background-color: ${background};
  outline: none;
  padding: 0 5px;
  color: ${darkText};
  font-size: 13pt;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: ${darkText};
  }
`;
export const Title = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HeadingPrimary = styled.h1`
  color: ${darkText};
  font-size: 1.7em;
  font-weight: 400;
`;
