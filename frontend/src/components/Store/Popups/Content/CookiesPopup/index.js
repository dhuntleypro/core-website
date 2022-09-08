import React from 'react';

import {
  Container,
  ContainerWrapper,
  // CookieButton,
  CookieButton1,
  CookieButton2,
  CookieButtonRow,
  CookieCaption,
  CookieDescription,
  CookieIcon,
  CookieTitle,
} from './CookiesPopupElements';

const CookiesPopup = () => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <CookieTitle>
            <CookieIcon /> HOW WE USE COOKIES
          </CookieTitle>

          <CookieDescription>
            We use cookies that help us to provide you with the best possible
            shopping experience with us. For example, they allow us to connect
            to social networks, display personalised content, deliver
            personalised ads, as well as analyse and improve the operation of
            our website.
          </CookieDescription>
          <CookieButtonRow>
            <CookieButton1>MORE INFO</CookieButton1>
            <CookieButton2>ACCEPT ALL</CookieButton2>
          </CookieButtonRow>
          <CookieCaption>
            We have recently updated our Privacy Notice, click here for further
            details
          </CookieCaption>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default CookiesPopup;
