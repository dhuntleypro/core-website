import React from 'react';
import { BRAND_NAME } from '../../../utils';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SigninElements';
// import Axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Helmet } from 'react-helmet-async';
// import { useContext, useEffect, useState } from 'react';
// import { Store } from '../../../../Store';
// import { toast } from 'react-toastify';
// import { getError } from '../../../../utils';
// import ScrollToTop from '../../../../components/Store/ScrollToTop';
const Signin = () => {
  // const navigate = useNavigate();
  // const { search } = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get('redirect');
  // const redirect = redirectInUrl ? redirectInUrl : '/';

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { userInfo } = state;
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await Axios.post('/api/users/signin', {
  //       email,
  //       password,
  //     });
  //     ctxDispatch({ type: 'USER_SIGNIN', payload: data });
  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     navigate(redirect || '/');
  //   } catch (err) {
  //     toast.error(getError(err));
  //   }
  // };

  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">{BRAND_NAME}</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default Signin;
