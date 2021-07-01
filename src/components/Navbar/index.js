import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {
  HeaderContainer, HeaderNavbar, Navbar, Image, HeaderH3, H1, MainMenuH3, Anchor, LinkBox,
} from './NavbarStyle';

export default () => (
  <Navbar>
    <HeaderNavbar>
      <HeaderContainer>
        <div>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PrHAw7gV3ufzkwNYzMBwwyUmNmgbpQ48Zw&amp;usqp=CAU" alt="Covid in World icom" />
        </div>
        <div>
          <H1>Covid in World</H1>
          <HeaderH3>Disease API used</HeaderH3>
        </div>
      </HeaderContainer>
    </HeaderNavbar>
    <main>
      <MainMenuH3>MAIN MENU</MainMenuH3>
      <LinkBox>
        <Anchor to="/"><span><HomeIcon /></span>Home</Anchor>
      </LinkBox>
      <LinkBox>
        <Anchor to="/worldwide"><span><PublicIcon /></span>Worldwide</Anchor>
      </LinkBox>
      <LinkBox>
        <Anchor to="/search"><span><RoomIcon /></span>Country</Anchor>
      </LinkBox>
      <LinkBox>
        <Anchor to="/vaccines"><span><LocalHospitalIcon /></span>Vaccines
        </Anchor>
      </LinkBox>
    </main>
  </Navbar>
);
