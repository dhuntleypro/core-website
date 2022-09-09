import React from 'react';
import { PageColumn3 } from '../../CustomStyles/PageColumn';
import {
  CategoryCaption,
  CategoryCaptionContainer,
  CategoryTitle,
  Left,
  ProductList,
} from './CategoryDetailsELements';

const CategoryDetails = (item) => {
  return (
    <>
      <CategoryCaptionContainer>
        <CategoryTitle>{item.name}</CategoryTitle>
        <CategoryCaption>fokfof okfokfo ofkofok ofkofko fok</CategoryCaption>
      </CategoryCaptionContainer>

      <PageColumn3>
        <Left>
          <h2>Refine Search</h2>
        </Left>
        <ProductList></ProductList>
      </PageColumn3>
    </>
  );
};

export default CategoryDetails;
