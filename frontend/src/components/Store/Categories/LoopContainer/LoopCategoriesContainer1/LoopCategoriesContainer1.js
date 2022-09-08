import React from 'react';
import CategoryItem from '../../Card/CategoryItem/CategoryItem';
import { Container } from './CategoriesElements';
import { categories } from '../../data';
const LoopCategoriesContainer1 = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default LoopCategoriesContainer1;
