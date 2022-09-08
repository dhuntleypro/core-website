import React from 'react';
import { Circle, Container, Icon, Image, Info } from './ProductItem1Elements';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';

const ProductItem1 = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
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

export default ProductItem1;
