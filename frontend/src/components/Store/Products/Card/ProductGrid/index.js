import React from 'react';
import { Circle, Container, Icon, Image, Info } from './ProductGridElements';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';

const ProductGrid = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <FaShoppingCart />
        </Icon>
        <Icon>
          <FaSearch />
        </Icon>
        <Icon>
          <FaHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductGrid;
