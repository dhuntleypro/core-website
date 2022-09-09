import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../../../responsive';
// import { btnReset, v } from '../styles/variables.js';

//
export const CartGroup = styled.div``;

// TITLE
export const CartTitles = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  /* ${mobile({ display: 'none' })} */
`;

export const TitleItem = styled.div`
  /* width: 400px; */
  /* background-color: green; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* font-size: 12px; */
`;

export const TitleItemPrice = styled.div`
  width: 100px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 12px;
`;

export const TitleQuantity = styled.div`
  width: 100px;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const TitleTotalPrice = styled.div`
  width: 100px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const CartItem = styled.div`
  color: black;
  display: flex;
  width: 1000px;
  ${mobile({ display: 'list-item' })}
`;

export const CartListTitles = styled.div`
  color: black;
  display: flex;
`;

export const CartImage = styled.div`
  /* color: black;
  display: flex; */
  width: 150px;
  /* height: 120px; */
  ${mobile({ width: '200px' })}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  /* padding-left: 20px; */
  /* background-color: blue; */
  /* width: 250px; */

  ${mobile({ fontSize: '15px' })}
`;

export const Price = styled.div`
  padding-left: 20px;
  /* background-color: pink; */

  width: 100px;
`;
export const Quantity = styled.div`
  /* display: flex; */
  /* background-color: red; */
  width: 100px;
  /* height: 20px; */
  /* align-items: center;
  justify-content: center; */
  /* padding: 15px; */
`;
export const TotalPrice = styled.div`
  width: 100px;
  /* background-color: green; */

  /* padding-left: 20px; */
  align-items: left;
  justify-content: left;
`;

export const PriceLabel = styled.div`
  display: none;
  ${mobile({ display: 'contents' })}
`;

// export const QuantityLabel = styled.div`
//   display: none;
//   ${mobile({ display: 'contents' })}
// `;

// Minus  Quanity
export const MinusButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const PlusButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ImageAndName = styled.div`
  display: flex;
  width: 400px;
  /* background-color: red; */
`;
