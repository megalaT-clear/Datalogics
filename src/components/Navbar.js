/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Menu } from '@mui/icons-material';

const Navbar = () =>
  <div class="navBar">
    <div class="nav">
      <div class="navLeft">
        <img class="logo" src="./img/logo.jpeg" />
        <p class="heading">Datalogics</p>
      </div>
      <div class="navCenter">
        <div class="navCenters">Enterprise</div>
        <div class="navCenters">Repair</div>
        <div class="navCenters">Logistics</div>
        <div class="navCenters">Dcare</div>
      </div>
    </div>
    <div class="navRight">
      <Menu/>
    </div>
  </div>

export default Navbar