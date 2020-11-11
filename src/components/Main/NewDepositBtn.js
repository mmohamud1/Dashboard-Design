import React from 'react';
import { AddButton, AddIcon } from './MainElemetns';

const NewDepositBtn = () => {
  return (
    <AddButton>
      <AddIcon
        className='iconify'
        data-inline='false'
        data-icon='mdi-light:plus'
      ></AddIcon>
    </AddButton>
  );
};

export default NewDepositBtn;
