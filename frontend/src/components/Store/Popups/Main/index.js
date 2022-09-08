import React from 'react';
import { Container, MainContainer, CloseButton } from './PopupElements';

const Popup = (props) => {
  return props.trigger ? (
    <MainContainer
    // Clicking on background closes popup
    // onClick={() => props.setTrigger(false)}
    >
      <Container>
        <CloseButton onClick={() => props.setTrigger(false)}>X</CloseButton>
        {props.children}
      </Container>
    </MainContainer>
  ) : (
    ''
  );
};

export default Popup;
