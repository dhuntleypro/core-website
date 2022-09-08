import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  /* justify-content: space-evenly; */
`;

export const Card = styled.div`
  border-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  border: 2px solid;
`;

export const ProductLink = styled(Link)``;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
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
`;

export const ProductPrice = styled.p``;

export const ProductAddToCart = styled.div`
  padding: 30px;
`;
