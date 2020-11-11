import styled from 'styled-components';

export const MainContainer = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

export const NavContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

export const ProfileImg = styled.img`
    height: 2rem;
    width: 2rem;
    margin: 0 1rem;
    border-radius: 50%;
    cursor: pointer;
`

export const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray};
    font-size: 27px;
    cursor: pointer;
`

export const AddButton = styled.a`
  background-color: ${({ theme }) => theme.colorPurple};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: absolute;
  top: 6rem;
  right: 7rem;
  cursor: pointer;
  transition: all ease-in-out 300ms;

  &:hover {
    box-shadow: 10px 10px 8px -8px rgba(128, 76, 216, 0.3);
  }
`;

export const AddIcon = styled.a`
  color: #ffffff;
  font-size: 36px;
`;