import { FaCookieBite } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;

  /* Pink */
  background-color: #fdd7e9;
`;

export const ContainerWrapper = styled.div`
  /* width: 80%; */
  padding-top: 50px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CookieTitle = styled.h5`
  font-weight: 700;
`;

export const CookieDescription = styled.div``;

export const CookieButtonRow = styled.div`
  /* background-color: red; */
  /* width: 1000px; */
  /* min-width: 800px; */
  border-collapse: separate;
  border-spacing: 220px 420px;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const CookieButton1 = styled.button`
  border-color: #000;

  width: 400px;
  height: 45px;
  background-color: #fff;
  color: #000;
  font-weight: 700;
`;

export const CookieButton2 = styled.button`
  border-color: #000;

  width: 400px;
  height: 45px;
  background-color: #000;
  color: #fff;
  font-weight: 700;
`;

export const CookieCaption = styled.div``;

export const SigninLink = styled(Link)``;

export const CookieIcon = styled(FaCookieBite)`
  /* margin-left: 8px;
  font-size: 30px; */

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
