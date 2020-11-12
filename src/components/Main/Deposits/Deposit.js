import React from 'react'
import { DepositContainer, DepositMoveInDate, DepositProperty, DepositPropertyImg, DepositPropertyStreet, DepositPropertyText, DepositSubtitle } from './DepositElements';
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
      </DepositContainer>
    );
}

export default Deposit
