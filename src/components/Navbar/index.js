import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

export default () => (
  <nav className="navbar">
    <header className="header">
      <div className="header-container">
        <div className="image-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PrHAw7gV3ufzkwNYzMBwwyUmNmgbpQ48Zw&amp;usqp=CAU" alt="Covid in World icom" />
        </div>
        <div className="name-box">
          <h1>Covid in World</h1>
          <h3>Disease API used</h3>
        </div>
      </div>
    </header>
    <main className="main-menu">
      <h3>MAIN MENU</h3>
      <div className="link">
        <Link to="/"><span><HomeIcon /></span>Home</Link>
      </div>
      <div className="link">
        <Link to="/worldwide"><span><PublicIcon /></span>Worldwide</Link>
      </div>
      <div className="link">
        <Link to="/search"><span><RoomIcon /></span>Country</Link>
      </div>
      <div className="link">
        <Link to="/vaccines"><span><LocalHospitalIcon /></span>Vaccines
        </Link>
      </div>
    </main>
  </nav>
);
