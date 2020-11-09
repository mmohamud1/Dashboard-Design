import React from 'react';
import { Icon, ItemContainer, Title } from './MenuElements';

const MenuItem = ({ title, active, icon }) => {
  return (
    <ItemContainer active={active}>
      <Icon
        active={active}
        className='iconify'
        data-inline='false'
        data-icon={`mdi-light:${icon}`}
      ></Icon>
      <Title active={active}>{title}</Title>
    </ItemContainer>
  );
};

export default MenuItem;
