import styled from 'styled-components';

export const DepositsTitle = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
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

export const SortingBarStatus = styled(SortingBarText)`
`