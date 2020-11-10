import React from 'react';
import Deposits from './Deposits/Deposits';
import { MainContainer } from './MainElemetns';
import Nav from './Nav';
import NewDepositBtn from './NewDepositBtn';

import depositData from '../../DepositData.json'

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <NewDepositBtn />
      <Deposits title="Active Depositis" count={2} data={depositData.active} />
      <Deposits title="Closed Depositis" count={8} data={depositData.closed} />
    </MainContainer>
  );
};

export default Main;
