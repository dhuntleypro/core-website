import React, { useEffect, useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../../../../utils';
// import { Helmet } from 'react-helmet-async';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Rating from '../../Rating';
// import LoadingBox from '../../LoadingBox';
// import MessageBox from '../../MessageBox';
// import Button from 'react-bootstrap/Button';
// import Product from '../../Product';
// import LinkContainer from 'react-router-bootstrap/LinkContainer';
// import styled from 'styled-components';
import {
  CategoryButton,
  CategoryLink,
  // CategoryLink,
  Container,
} from './ListOfCategoriesElements';
import Popup from '../../Popups/Main';
// import NewsLetterPopupContent from '../../Popups/Content/NewsLetterPopup';
// import EmailPopupContent from '../../Popups/Content/ThankYouPopup/Email';
import PopupWindow from '../../PopupWindow';
import CategoryWindow from '../../PopupWindow/Content/CategoryWindow';

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

export default function ListOfCategories(onpenPopup) {
  const [buttonPopup, setButtonPopup] = useState(false);

  // const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

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

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  function handleMouseEnter(e) {
    console.log();
    setButtonPopup(true);
  }

  function handleMouseLeave(e) {
    console.log();
    setButtonPopup(false);
  }

  return (
    <>
      <Container>
        {categories.map((c) => (
          <CategoryLink
            key={c}
            to={getFilterUrl({ category: c })}
            // onMouseEnter={handleMouseEnter}
          >
            {c}
          </CategoryLink>

          // <CategoryButton
          //   key={c}
          //   onClick={() => setButtonPopup(true)}
          //   // onMouseEnter={handleMouseEnter}
          //   // onMouseLeave={handleMouseLeave}
          // >
          //   {c}
          // </CategoryButton>
        ))}
      </Container>

      <PopupWindow trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CategoryWindow />
      </PopupWindow>
    </>
  );
}
