import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
`;

export const ProfileImg = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;
