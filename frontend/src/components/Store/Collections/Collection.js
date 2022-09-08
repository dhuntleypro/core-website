// import { PageColumn2 } from '../../CustomStyles/PageColumn';
import {
  Colume1,
  Colume2,
  Container,
  ProductContainer,
  ProductView,
} from './CollectionElements';

import React, { useEffect, useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../../../utils';

// import Rating from '../../Store/Rating';
import LoadingBox from '../../Store/LoadingBox';
import MessageBox from '../../Store/MessageBox';
import Button from 'react-bootstrap/Button';
import Product from '../../Store/Products/LoopOfProducts1/Product';

// import { SDivider } from '../../CustomStyles/DividerElement';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

// const prices = [
//   {
//     name: '$1 to $50',
//     value: '1-50',
//   },
//   {
//     name: '$51 to $200',
//     value: '51-200',
//   },
//   {
//     name: '$201 to $1000',
//     value: '201-1000',
//   },
// ];

export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1stars & up',
    rating: 1,
  },
];

const Collection = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  //   const [{ loading, error, products, pages, countProducts }, dispatch] =
  const [{ loading, error, products, countProducts }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      error: '',
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query, rating]);

  //   const [categories, setCategories] = useState([]);
  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         const { data } = await axios.get(`/api/products/categories`);
  //         setCategories(data);
  //       } catch (err) {
  //         toast.error(getError(err));
  //       }
  //     };
  //     fetchCategories();
  //   }, [dispatch]);

  //   const getFilterUrl = (filter) => {
  //     const filterPage = filter.page || page;
  //     const filterCategory = filter.category || category;
  //     const filterQuery = filter.query || query;
  //     const filterRating = filter.rating || rating;
  //     const filterPrice = filter.price || price;
  //     const sortOrder = filter.order || order;
  //     return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  //   };

  return (
    <div>
      <Container>
        <Colume1>
          <ProductContainer>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                <div>
                  {countProducts === 0 ? 'No' : countProducts} Results
                  {query !== 'all' && ' : ' + query}
                  {category !== 'all' && ' : ' + category}
                  {price !== 'all' && ' : Price ' + price}
                  {rating !== 'all' && ' : Rating ' + rating + ' & up'}
                  {query !== 'all' ||
                  category !== 'all' ||
                  rating !== 'all' ||
                  price !== 'all' ? (
                    <Button variant="light" onClick={() => navigate('/search')}>
                      <i className="fas fa-times-circle"></i>
                    </Button>
                  ) : null}
                </div>

                <ProductView>
                  {products.map((product) => (
                    <div
                      style={{
                        // padding: '50px',
                        // width: '300px',
                        // height: '300px',
                        justifyContent: 'space-evenly',
                      }}
                      // sm={6}
                      // lg={2}
                      key={product._id}
                    >
                      <Product
                        style={{ padding: '50px' }}
                        product={product}
                      ></Product>
                    </div>
                  ))}
                </ProductView>
              </>
            )}
          </ProductContainer>
        </Colume1>
        <Colume2>
          <div>filter</div>
        </Colume2>
      </Container>
    </div>
  );
};

export default Collection;
