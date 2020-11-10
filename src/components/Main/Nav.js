import React from 'react';
import { MessageIcon, NavContainer, ProfileImg } from './MainElemetns';
import Image from '../../assets/images/profile.jpg';

const Nav = () => {
  return (
    <NavContainer>
      <MessageIcon
        className='iconify'
        data-inline='false'
        data-icon='mdi-light:email'
      ></MessageIcon>
      <ProfileImg src={Image} />
    </NavContainer>
  );
};

export default Nav;
