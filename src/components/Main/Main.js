import React from 'react';
import Deposits from './Deposits/Deposits';
import { MainContainer } from './MainElemetns';
import Nav from './Nav';
import NewDepositBtn from './NewDepositBtn';

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <NewDepositBtn />
      <Deposits title="Depositis" count={2} data={} />
      <Deposits title="Depositis" count={2} data={} />
    </MainContainer>
  );
};

export default Main;
