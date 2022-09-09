import styled from 'styled-components';
import { mobile, tablet } from '../../../responsive';
import { NEWSLETTER_IMAGE } from '../../../utils';

export const ContainerX = styled.div`
  /* width: 800px; */
  /* height: 1050px; */
  /* height: fit-content; */
  width: 100%;
  color: blue;
`;

// export const ContainerWrapper = styled.div`
//   padding: 34px;
// `;

export const Colume1 = styled.div`
  width: 100%;
  /* height: 450px; */
  /* position: absolute; */
  top: 0;
  left: 0;
  ${mobile({ display: 'none' })}/* z-index: 1000; */
  /* background-image: url(${NEWSLETTER_IMAGE}); */
`;
// export const ImageContainer = styled.div`

//   width: 100%;
//   float: left;
//   height: 100%;
// `;

export const Colume1Image = styled.img`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  /* z-index: 10; */
  background-color: blue;
  /* ${mobile({ display: 'none' })}z-index: 1000; */
`;

export const Colume1Title = styled.div`
  /* z-index: 10; */
`;

export const Colume1Caption = styled.div``;

export const Colume2 = styled.div`
  /* width: 100vh; */
  /* height: 100%; */
  /* margin: 0; */
  /* padding: 34px; */
  /* height: 100vh; */
  ${mobile({ width: '80vh' })}
  ${tablet({ width: '80vh' })}
`;

export const Colume2Wrapper = styled.div`
  padding: 34px;
  padding-top: 200px;
`;

export const Colume2Title = styled.h5`
  /* font-weight: lighter; */
  /* width: 60%; */
  width: 100%;
  font-weight: bold;
  font-size: 40px;
`;

export const TextFieldContainer = styled.div`
  /* display: flex; */
  /* justify-content: space-between;
  align-items: center;
  max-width: 1100px; */
  /* height: 400px; */
  margin: 10;
`;

export const Colume2SubmitButton = styled.button``;

export const Colume2CancelButton = styled.button``;

export const Colume2Discloser = styled.div`
  /* padding-top: 100px; */
  font-size: 9px;
  color: gray;
`;
