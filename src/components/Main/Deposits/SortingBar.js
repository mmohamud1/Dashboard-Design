import React from 'react';
import {
  SortingBarContainer,
  SortingBarDeposit,
  SortingBarMoveInDate,
  SortingBarProperty,
  SortingBarRent,
  SortingBarStatus,
} from './DepositElements';

const SortingBar = () => {
  return (
    <SortingBarContainer>
      <SortingBarProperty>Property</SortingBarProperty>
      <SortingBarMoveInDate>Move In Date</SortingBarMoveInDate>
      <SortingBarRent>Rent</SortingBarRent>
      <SortingBarDeposit>Deposit</SortingBarDeposit>
      <SortingBarStatus>Status</SortingBarStatus>
    </SortingBarContainer>
  );
};

export default SortingBar;
