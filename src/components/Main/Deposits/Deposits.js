import React from 'react';
import { DepositsCount, DepositsTitle } from './DepositElements';
import SortingBar from './SortingBar';
import Deposit from './Deposit';
import AllDepositsBtn from '../AllDepositsBtn';

const Deposits = ({ title, count, data }) => {
  return (
    <div>
      <DepositsTitle>
        {title}
        <DepositsCount>{count}</DepositsCount>
      </DepositsTitle>
      <SortingBar />
      {data.map((deposit) => (
        <Deposit data={deposit} key={deposit.property.address.street} />
      ))}
      <AllDepositsBtn title={title}/>
    </div>
  );
};

export default Deposits;
