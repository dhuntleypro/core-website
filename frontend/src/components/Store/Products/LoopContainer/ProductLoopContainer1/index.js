import React, { useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
import axios from 'axios';
import ProductGrid from '../../Card/ProductGrid';
import { Container } from './ProductLoopContainer1Elements';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductLoopContainer1 = (items) => {
  // eslint-disable-next-line
  // const [, dispatch] = useReducer(logger(reducer), {
  // eslint-disable-next-line
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        {products.slice(0, 6).map((product) => (
          <Link to={`/product/${product.slug}`} key={product._id}>
            <ProductGrid item={product} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default ProductLoopContainer1;
