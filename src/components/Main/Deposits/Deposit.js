import React from 'react';
import {
  DepositContainer,
  DepositMoveInDate,
  DepositProperty,
  DepositPropertyImg,
  DepositPropertyStreet,
  DepositPropertyText,
  DepositRent,
  DepositStatus,
  DepositSubtitle,
  DepositText,
  DepositWrapper,
  DepositStatusIndicator,
} from './DepositElements';
import Image from '../../../assets/images/home-icon.png';

const Deposit = ({ data }) => {
  const { property, moveInDate, rent, deposit, status } = data;
  return (
    <DepositContainer>
      <DepositProperty>
        <DepositPropertyImg src={Image} />
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
        {(() => {
          switch (status.level) {
            case 1:
              return <DepositStatusIndicator color='#F17E7E' />;
            case 2:
              return <DepositStatusIndicator color='#FFD056' />;
            case 3:
              return <DepositStatusIndicator color='#75C282' />;
            default:
              return <DepositStatusIndicator color='#AAA5A5' />;
          }
        })()}
      </DepositStatus>
    </DepositContainer>
  );
};

export default Deposit;
