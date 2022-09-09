import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
// import axios from 'axios';
// import { BRAND_NAME, NEWSLETTER_IMAGE } from '../../utils';
// import {
//   CustomButtonBlack,
//   CustomButtonBlackBorder,
// } from '../../components/CustomStyles/ButtonElement';
import { PageColumn2 } from '../../../components/CustomStyles/PageColumn';
// import {
//   CustomTextFieldContainerBlackBorders,
//   CustomTextFieldInput,
// } from '../../components/CustomStyles/TextFieldElements';

import {
  ContainerX,
  // MainContainer,
  // Clos eButton,
  Colume1,
  Colume2,
  // ContainerWrapper,
  Colume1Image,
  // Colume1Title,
  // Colume1Caption,
  // ImageContainer,
  Colume2Title,
  Colume2Wrapper,
  // Colume2SubmitButton,
  // Colume2CancelButton,
  // Colume2Discloser,
  // TextFieldContainer,
} from './RegisterAndLoginElements';

import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Helmet } from 'react-helmet-async';
import { Store } from '../../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../../utils';
// import ScrollToTop from '../components/Store/ScrollToTop';

const RegisterAndLogin = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <ContainerX>
        <PageColumn2>
          <Colume1>
            <Colume1Image alt="" />
          </Colume1>
          <Colume2>
            <Colume2Wrapper>
              <Container className="small-container">
                <Colume2Title>Sign In</Colume2Title>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <Button type="submit">Sign In</Button>
                  </div>
                  <div className="mb-3">
                    New customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>
                      Create your account
                    </Link>
                  </div>
                </Form>
              </Container>

              {/*               
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
                  By signing up, you agree to stay in touch with {BRAND_NAME}.
                  We will use your personal information to provide you with
                  tailored updates about our activities, products and services.
                  For more information about our privacy practices and your
                  rights, please consult our privacy policy.
                </Colume2Discloser>

 */}
            </Colume2Wrapper>
          </Colume2>
        </PageColumn2>
      </ContainerX>
    </div>
  );
};

export default RegisterAndLogin;
