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