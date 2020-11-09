import React from 'react';
import { Container } from './MenuElements';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <Container>
      <MenuItem title='Home' icon='home' />
      <MenuItem title='Deposits' icon='file-multiple' active />
      <MenuItem title='Offers' icon='gift' />
      <MenuItem title='Payments' icon='bank' />
      <MenuItem title='Setting' icon='cog' />
    </Container>
  );
};

export default Menu;
