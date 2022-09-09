import React from 'react';
import {
  Container,
  // ContainerCol1,
  ContainerCol1Image,
  // ContainerCol1Row2,
  ContainerCol2,
  // ContainerCol2Row2,
  // ContainerCol3,
  // ContainerCol3Row2,
  ContainerWarper1,
  // ContainerWarper2,
} from './ProductDetailsElements';

import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Form from 'react-bootstrap/Form';
// import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Rating from '../../Store/Rating';
// import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../Store/LoadingBox';
import MessageBox from '../../Store/MessageBox';
import { getError, NAVIGATE_TO_CART } from '../../../utils';
import { Store } from '../../../Store';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
  // PageColumn2,
  PageColumn3,
  // PageColumn5,
} from '../../CustomStyles/PageColumn';
import { ButtonBlackAndTransparent } from '../../CustomStyles/ButtonElement';
// import ProductCard3 from '../Products/ProductCard3';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductDetails = () => {
  // let reviewsRef = useRef();

  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  // const [{ loading, error, product, loadingCreateReview }, dispatch] =
  //   useReducer(reducer, {
  //     product: [],
  //     loading: true,
  //     error: '',
  //   });

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });

    NAVIGATE_TO_CART ? navigate('/cart') : console.log('item added to cart');
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (!comment || !rating) {
  //     toast.error('Please enter comment and rating');
  //     return;
  //   }
  //   try {
  //     const { data } = await axios.post(
  //       `/api/products/${product._id}/reviews`,
  //       { rating, comment, name: userInfo.name },
  //       {
  //         headers: { Authorization: `Bearer ${userInfo.token}` },
  //       }
  //     );

  //     dispatch({
  //       type: 'CREATE_SUCCESS',
  //     });
  //     toast.success('Review submitted successfully');
  //     product.reviews.unshift(data.review);
  //     product.numReviews = data.numReviews;
  //     product.rating = data.rating;
  //     dispatch({ type: 'REFRESH_PRODUCT', payload: product });
  //     window.scrollTo({
  //       behavior: 'smooth',
  //       top: reviewsRef.current.offsetTop,
  //     });
  //   } catch (error) {
  //     toast.error(getError(error));
  //     dispatch({ type: 'CREATE_FAIL' });
  //   }
  // };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
      <Container>
        <ContainerWarper1>
          <PageColumn3>
            <Row xs={1} md={2}>
              {[product.image, ...product.images].map((x) => (
                <Col key={x}>
                  <Card>
                    <Button
                      className="thumbnail"
                      type="button"
                      variant="light"
                      onClick={() => setSelectedImage(x)}
                    >
                      <Card.Img variant="top" src={x} alt="product" />
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>

            <ContainerCol1Image
              src={selectedImage || product.image}
              alt={product.name}
            ></ContainerCol1Image>

            <ContainerCol2>
              <h1>{product.name}</h1>${product.price}
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
              <div style={{ padding: '50px' }}>
                <ButtonBlackAndTransparent
                  to=""
                  onClick={addToCartHandler}
                  variant="primary"
                >
                  Add to Cart
                </ButtonBlackAndTransparent>
              </div>
            </ContainerCol2>
          </PageColumn3>
        </ContainerWarper1>

        {/* 3 column row */}
        {/* <ContainerWarper2>
          <PageColumn3>
            <ContainerCol1Row2>
              <div>PRODUCT DETAILS</div>
              {product.description}
            </ContainerCol1Row2>
            <ContainerCol2Row2></ContainerCol2Row2>
            <ContainerCol3Row2></ContainerCol3Row2>
          </PageColumn3>
        </ContainerWarper2>
        <ContainerWarper2>
          <div>YOU MIGHT ALSO LIKE</div>
          <PageColumn5><ProductCard4/></PageColumn5>
        </ContainerWarper2> */}
      </Container>
    </>
  );
};

export default ProductDetails;
