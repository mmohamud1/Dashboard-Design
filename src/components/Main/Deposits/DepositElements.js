import styled from 'styled-components';

export const DepositsTitle = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const DepositsCount = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.headerNumber};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const SortingBarContainer = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  margin: 2rem 0;
  border-radius: 5px;
`;

export const SortingBarText = styled.h1`
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
`;

export const SortingBarProperty = styled(SortingBarText)`
  width: 30%;
`;

export const SortingBarMoveInDate = styled(SortingBarText)`
  width: 15%;
`;

export const SortingBarRent = styled(SortingBarText)`
  width: 10%;
`;

export const SortingBarDeposit = styled(SortingBarText)`
  width: 15%;
`;

export const SortingBarStatus = styled(SortingBarText)``;

export const DepositContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;
  &:hover {
    box-shadow: 0px 10px 8px -8px rgba(82, 122, 128, 0.6); 
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const DepositText = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

export const DepositSubtitle = styled(DepositText)`
  font-size: 0.6rem;
  color: #7fa7ad;
  margin-top: 2px;
`;

export const DepositProperty = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const DepositPropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const DepositPropertyImg = styled.img`
  height: 35px;
  width: 35px;
`;

export const DepositPropertyStreet = styled(DepositText)`
  font-size: 1rem;
`;

export const DepositMoveInDate = styled(DepositText)`
  width: 15%;
`;

export const DepositRent = styled(DepositText)`
  width: 10%;
`;

export const DepositWrapper = styled.div`
  width: 15%;
`;

export const DepositStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const DepositStatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-left: 1rem;
  position: absolute;
  right: 7rem;
`;