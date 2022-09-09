import { useContext } from 'react';
import { Store } from '../../../../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../../../Store/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CaptionImage,
  CartContainer,
  // CartGroup,
  // CartImage,
  // CartItem,
  CartItems,
  // CartTitles,
  // HDivider,
  // ImageAndName,
  // Info,
  // MinusButton,
  OrderSummary,
  // PlusButton,
  // Price,
  // PriceLabel,
  // Quantity,
  // QuantityLabel,
  // TitleItem,
  // TitleItemPrice,
  // TitleQuantity,
  // TitleTotalPrice,
  // TotalPrice,
} from './CartElements';

// import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
// import { SDivider, HDivider } from '../../../CustomStyles/DividerElement';

import { HDivider } from '../../../CustomStyles/DividerElement';
// import { mobile } from '../../../responsive';
import { ButtonBlackAndTransparent } from '../../../CustomStyles/ButtonElement';
// import { PageColumn2 } from '../../../CustomStyles/PageColumn';
// import NumberList from '../../NumberList/NumberList';

export default function Cart1() {
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
      <CaptionImage></CaptionImage>
      <p>Shopping Cart</p>
      <HDivider />
      <CartContainer>
        <CartItems>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Info</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    ></img>
                  </td>
                  <td></td>
                  {/* <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : 'No'}
                  </td> */}
                  <td>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => {
                        // navigate(`/order/${order._id}`);
                      }}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </CartItems>

        <OrderSummary>
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
        </OrderSummary>

        <Row>
          <Col md={8}></Col>
        </Row>
      </CartContainer>
    </div>
  );
}
