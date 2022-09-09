import styled from 'styled-components';
import { mobile } from '../../responsive';

export const CustomTextFieldContainerBlackBorders = styled.div`
  /* width: 50%; */
  height: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  ${mobile({ width: '80%' })}
  font-size: 13px;
`;

export const CustomTextFieldInput = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
