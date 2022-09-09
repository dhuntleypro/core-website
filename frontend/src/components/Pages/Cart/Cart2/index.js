import { useContext } from 'react';
import { Store } from '../../../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../../Store/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CartGroup,
  CartImage,
  CartItem,
  CartTitles,
  // HDivider,
  ImageAndName,
  Info,
  MinusButton,
  PlusButton,
  Price,
  PriceLabel,
  Quantity,
  QuantityLabel,
  TitleItem,
  TitleItemPrice,
  TitleQuantity,
  TitleTotalPrice,
  TotalPrice,
} from './CartElements';

import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { SDivider, HDivider } from '../../CustomStyles/DividerElement';
// import { mobile } from '../../../responsive';
import { ButtonBlackAndTransparent } from '../../CustomStyles/ButtonElement';
// import NumberList from '../../NumberList/NumberList';

export default function Cart2() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <p>Shopping Cart</p>
      <HDivider />
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <CartGroup>
              <CartTitles>
                <TitleItem>Item</TitleItem>
                <TitleItemPrice>Item Price</TitleItemPrice>
                <TitleQuantity>Quantity</TitleQuantity>
                <TitleTotalPrice>Total Price</TitleTotalPrice>
              </CartTitles>
              <SDivider />
              {cartItems.map((item) => (
                <div key={item._id}>
                  <CartItem>
                    <ImageAndName>
                      <Link to={`/product/${item.slug}`}>
                        <CartImage>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded img-thumbnail"
                          ></img>
                        </CartImage>
                      </Link>
                      &nbsp;
                      <Info>{item.name}</Info>
                    </ImageAndName>

                    <Price>
                      <PriceLabel>Price: </PriceLabel>${item.price}
                    </Price>
                    <Quantity>
                      <MinusButton
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                      >
                        <FaMinusCircle />
                      </MinusButton>

                      {/* Amount */}
                      <span>{item.quantity}</span>

                      <PlusButton
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                      >
                        <FaPlusCircle />
                      </PlusButton>
                    </Quantity>
                    <TotalPrice>${item.quantity * item.price}</TotalPrice>
                  </CartItem>

                  <SDivider />
                </div>
              ))}
            </CartGroup>
          )}
        </Col>
        <Col md={4}>
          Order Summary
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <ButtonBlackAndTransparent
                      to=""
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </ButtonBlackAndTransparent>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
