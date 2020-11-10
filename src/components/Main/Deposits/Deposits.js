import React from 'react';
import { DepositsCount, DepositsTitle } from './DepositElements';

const Deposits = ({ title, count, data }) => {
  return (
    <div>
      <DepositsTitle>
        {title}
        <DepositsCount>{count}</DepositsCount>
      </DepositsTitle>
    </div>
  );
};

export default Deposits;
