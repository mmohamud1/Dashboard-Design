import React from 'react'
import { DepositContainer, DepositMoveInDate, DepositProperty, DepositPropertyImg, DepositPropertyStreet, DepositPropertyText, DepositRent, DepositStatus, DepositSubtitle, DepositText, DepositWrapper } from './DepositElements';
import Image from '../../../assets/images/home-icon.png'

const Deposit = ({data}) => {

    const { property, moveInDate, rent, deposit, status } = data;
    return (
      <DepositContainer>
        <DepositProperty>
          <DepositPropertyImg
            src={Image}
          />
          <DepositPropertyText>
            <DepositPropertyStreet>
              {property.address.street}
            </DepositPropertyStreet>
            <DepositSubtitle>
              {property.address.city} {property.address.state}
            </DepositSubtitle>
          </DepositPropertyText>
        </DepositProperty>
        <DepositMoveInDate>{moveInDate}</DepositMoveInDate>
        <DepositRent>£{rent}</DepositRent>
        <DepositWrapper>
            <DepositText>£{deposit.amount}</DepositText>
            <DepositSubtitle>{deposit.type}</DepositSubtitle>
        </DepositWrapper>
        <DepositStatus>
            <DepositText>{status.message}</DepositText>
        </DepositStatus>
      </DepositContainer>
    );
}

export default Deposit
