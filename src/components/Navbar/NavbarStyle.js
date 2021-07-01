import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  covid, darkText, lightText, shadow,
} from '../Variables';

export const Navbar = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 0 0 25px;
  justify-content: start;
  position: fixed;
  width: 20%;
  z-index: 999;
`;
export const HeaderNavbar = styled.header`
  height: 70px;
  width: 100%;
  margin-bottom: 15px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const Image = styled.img`
  width: 50px;
  border-radius: 5px;
  box-shadow: ${shadow};
`;
export const H1 = styled.h1`
  margin-bottom: 3px;
  font-weight: bold;
  font-size: 1.4em;
  color: ${darkText};
`;
export const HeaderH3 = styled.h3`
  color: ${lightText};
  font-size: 1.1em;
  font-weight: 300;
`;
export const MainMenuH3 = styled.h3`
  margin-bottom: 20px;
  color: ${lightText};
  font-size: 0.9em;
  font-weight: 400;
`;
export const Anchor = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: ease all 0.4s;
  color: ${lightText};
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 400;
`;
export const LinkBox = styled.div`
  &:hover {
    background-color: rgba(255, 90, 90, 0.603);
    border-radius: 5px;
    a {
      color: ${darkText};
    }
    span {
      color: ${covid};
    }
  }
`;
