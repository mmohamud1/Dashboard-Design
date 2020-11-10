import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const ItemContainer = styled.div`
  border-left: 5px solid
    ${(props) => (props.active ? props.theme.activeMenu : 'transparent')};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.span`
  color: ${(props) => (props.active ? props.theme.activeMenu : '#aaa5a5')};
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => (props.active ? props.theme.activeMenu : '#aaa5a5')};
  font-size: 0.9rem;
  font-weight: 300;
`;

export const AddButton = styled.a`
  background-color: ${({ theme }) => theme.colorGreen};
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
    box-shadow: 10px 10px 8px -8px rgba(117, 194, 130, 0.6); 
  }
`;

export const AddIcon = styled.a`
  color: #ffffff;
  font-size: 36px;
`;