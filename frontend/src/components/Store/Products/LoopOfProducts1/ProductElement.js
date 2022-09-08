import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  /* justify-content: space-evenly; */
`;

export const Card = styled.div`
  /* border-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  border: 2px solid; */
  padding: 10px;
`;

export const ProductLink = styled(Link)``;

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  /* max-width: 200px;
  max-height: 300px; */
  transform: {
    scale: 0.55;
  }
`;

export const Row1 = styled.div`
  /* evenly space out  */
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const ProductTitle = styled.p`
  color: black;
  font-weight: bold;
`;

export const ProductPrice = styled.p``;

export const ProductOnSalePrice = styled.p`
  color: gray;
  text-decoration: line-through;
`;

export const ProductAddToCart = styled.div`
  padding: 30px;
`;

export const PricingContainer = styled.div`
  display: flex;
  font-size: 13px;
  /* align-content: left; */
  /* justify-content: space-between; */
`;
