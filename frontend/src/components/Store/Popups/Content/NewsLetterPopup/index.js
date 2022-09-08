import React, { useState } from 'react';
import axios from 'axios';
import { NEWSLETTER_IMAGE } from '../../../../../utils';
import {
  CustomButtonBlack,
  CustomButtonBlackBorder,
} from '../../../../CustomStyles/ButtonElement';
import { PageColumn2 } from '../../../../CustomStyles/PageColumn';
import {
  CustomTextFieldContainerBlackBorders,
  CustomTextFieldInput,
} from '../../../../CustomStyles/TextFieldElements';

import {
  Container,
  // MainContainer,
  // Clos eButton,
  Colume1,
  Colume2,
  // ContainerWrapper,
  Colume1Image,
  Colume1Title,
  Colume1Caption,
  // ImageContainer,
  Colume2Title,
  Colume2Wrapper,
  // Colume2SubmitButton,
  // Colume2CancelButton,
  Colume2Discloser,
  TextFieldContainer,
} from './NewsLetterPopupElement';

const NewsLetterPopupContent = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState('');
  const handleSend = async (e) => {
    setSent(true);
    try {
      await axios.post('http://localhost:5009/send_mail', {
        text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   {!sent ? (
    //     <form onSubmit={handleSend}>
    //       <input
    //         type="text"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />

    //       <button type="submit">Send Email</button>
    //     </form>
    //   ) : (
    //     <h1>Email Sent</h1>
    //   )}
    // </div>
    <div>
      {!sent ? (
        <Container>
          <PageColumn2>
            <Colume1>
              <Colume1Image src={NEWSLETTER_IMAGE} alt="" />

              <Colume1Title>test</Colume1Title>
              <Colume1Caption>Stay in the know</Colume1Caption>
            </Colume1>
            <Colume2>
              <Colume2Wrapper>
                <Colume2Title>
                  Join our newsletter and receive 10% off your first order.
                </Colume2Title>
                <TextFieldContainer>
                  <CustomTextFieldContainerBlackBorders>
                    <CustomTextFieldInput
                      placeholder="Email"
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </CustomTextFieldContainerBlackBorders>
                  &nbsp;
                  <CustomTextFieldContainerBlackBorders>
                    <CustomTextFieldInput placeholder="Like surprises ?" />
                  </CustomTextFieldContainerBlackBorders>
                </TextFieldContainer>
                &nbsp;
                <div style={{ display: 'flex' }}>
                  <CustomButtonBlack onClick={handleSend}>
                    Subscribe
                  </CustomButtonBlack>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <CustomButtonBlackBorder>No, Thanks</CustomButtonBlackBorder>
                </div>
                <Colume2Discloser style={{ paddingTop: '30px' }}>
                  By signing up, you agree to stay in touch with ETQ. We will
                  use your personal information to provide you with tailored
                  updates about our activities, products and services. For more
                  information about our privacy practices and your rights,
                  please consult our privacy policy.
                </Colume2Discloser>
              </Colume2Wrapper>
            </Colume2>
          </PageColumn2>
        </Container>
      ) : (
        <h1>Email Sent</h1>
      )}
    </div>
  );
};

export default NewsLetterPopupContent;
