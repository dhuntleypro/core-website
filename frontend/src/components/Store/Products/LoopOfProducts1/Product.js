// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Rating from '../../../Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../../../../Store';
import { ButtonBlackAndTransparent } from '../../../CustomStyles/ButtonElement';
// import { ButtonBlackAndTransparent } from '../../../CustomStyles/ButtonElement';
import {
  // Container,
  Card,
  ProductAddToCart,
  ProductImage,
  // ProductImageLink,
  ProductLink,
  ProductPrice,
  ProductTitle,
  // Row1,
  ProductOnSalePrice,
  PricingContainer,
} from './ProductElement';
// import { ButtonBlackAndTransparent } from '../../../CustomStyles/ButtonElement';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
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

  return (
    <>
      <Card>
        <ProductLink to={`/product/${product.slug}`}>
          <ProductImage
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </ProductLink>

        <ProductAddToCart>
          {product.countInStock === 0 ? (
            <ButtonBlackAndTransparent variant="light" disabled>
              Out of stock
            </ButtonBlackAndTransparent>
          ) : (
            <ButtonBlackAndTransparent
              to=""
              onClick={() => addToCartHandler(product)}
              style={{ height: '30px', width: '200px' }}
            >
              Add to cart
            </ButtonBlackAndTransparent>
          )}
        </ProductAddToCart>

        <ProductTitle>{product.name}</ProductTitle>
        <>
          {product.onSale ? (
            <div>
              <ProductPrice>{product.salePrice}</ProductPrice>
              <ProductOnSalePrice>{product.salePrice}</ProductOnSalePrice>
            </div>
          ) : (
            // <ProductPrice>${product.price}</ProductPrice>
            <PricingContainer>
              <ProductOnSalePrice>${product.price}</ProductOnSalePrice>
              <ProductPrice>${product.salePrice}</ProductPrice>
            </PricingContainer>
          )}
        </>
      </Card>
    </>

    // <Container>
    //   <Card>
    //     <ProductLink to={`/product/${product.slug}`}>
    //       <ProductImage
    //         src={product.image}
    //         className="card-img-top"
    //         alt={product.name}
    //       />
    //     </ProductLink>
    //     <Row1>
    //       <ProductLink to={`/product/${product.slug}`}>
    //         <ProductTitle>{product.name}</ProductTitle>
    //       </ProductLink>

    //       <ProductPrice>${product.price}</ProductPrice>
    //     </Row1>
    // <ProductAddToCart>
    //   {product.countInStock === 0 ? (
    //     <ButtonBlackAndTransparent variant="light" disabled>
    //       Out of stock
    //     </ButtonBlackAndTransparent>
    //   ) : (
    //     <ButtonBlackAndTransparent
    //       to=""
    //       onClick={() => addToCartHandler(product)}
    //       style={{ height: '30px', width: '200px' }}
    //     >
    //       Add to cart
    //     </ButtonBlackAndTransparent>
    //   )}
    // </ProductAddToCart>
    //   </Card>
    // </Container>
  );
}

export default Product;
