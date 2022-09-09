import React from 'react';
// import ScrollToTop from '../components/ScrollToTop';
// import Cart from '../../components/Pages/Cart/Cart1';
import CartScreen from '../../components/Pages/Cart/Cart1/CartScreen';
// import Announcement from '../../components/Sections/Announcement';
// import Navbar from '../../components/Store/Navbar';
// import PageHeader from '../../components/Sections/PageHeader';
import { OFFSET_CART_PAGE, OFFSET_NAV } from '../../utils';

const CartPage = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <PageHeader /> */}
      {OFFSET_CART_PAGE ? (
        <div style={{ paddingTop: OFFSET_NAV }}></div>
      ) : (
        <></>
      )}
      <div style={{ padding: '50px' }}>
        <CartScreen />
      </div>

      {/* <Cart /> */}
    </>
  );
};

export default CartPage;
