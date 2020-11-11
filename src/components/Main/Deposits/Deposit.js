import React from 'react'
import { DepositContainer } from './DepositElements';

const Deposit = ({data}) => {

    const { property, moveInDate, rent, deposit, status } = data;
    return (
        <DepositContainer>
            Deposits
        </DepositContainer>
    )
}

export default Deposit
