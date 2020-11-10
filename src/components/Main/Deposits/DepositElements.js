import styled from 'styled-components';


export const DepositsTitle = styled.h1`
    font-weight: 500;
    color: ${({theme}) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

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
  border-radius: 20px
`;