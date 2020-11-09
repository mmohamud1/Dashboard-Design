import React from 'react';
import { Container, ProfileImg, ProfileName } from './ProfileElements';
import Image from '../../assets/images/profile.jpg';

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>Lilly Williams</ProfileName>
    </Container>
  );
};

export default Profile;
