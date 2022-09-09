import React from 'react';
import { Container, ImageContainer, LargeImage } from './ProfileElements';
import image from '../../../images/PageImage/image3.jpg';
import ProfileScreen from '../../../components/Pages/Profile/ProfileScreen';
// import PageFooter from '../../Sections/PageFooter';
// import ImageResize from '../../ImageCropper/ImageCropper';
const Profile = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <LargeImage src={image} alt="" />
        </ImageContainer>

        <ProfileScreen style={{ padding: '50px' }} />
        {/* <PageFooter /> */}
      </Container>
    </>
  );
};

export default Profile;
