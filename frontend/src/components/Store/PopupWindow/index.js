import React from 'react';
import { Container, MainContainer, CloseButton } from './PopupWindowElements';

const PopupWindow = (props) => {
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

export default PopupWindow;
