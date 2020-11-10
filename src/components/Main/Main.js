import React from 'react';
import { MainContainer } from './MainElemetns';
import Nav from './Nav';
import NewDepositBtn from './NewDepositBtn';

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <NewDepositBtn />
    </MainContainer>
  );
};

export default Main;
