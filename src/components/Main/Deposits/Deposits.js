import React from 'react';
import { DepositsCount, DepositsTitle } from './DepositElements';
import SortingBar from './SortingBar'

const Deposits = ({ title, count, data }) => {
  return (
    <div>
      <DepositsTitle>
        {title}
        <DepositsCount>{count}</DepositsCount>
      </DepositsTitle>
      <SortingBar />
    </div>
  );
};

export default Deposits;
