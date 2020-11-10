import React from 'react'
import { AddButton, AddIcon } from '../Sidebar/Menu/MenuElements'

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
}

export default NewDepositBtn
