import React from 'react';
// import Navbar from '../../components/Sections/Navbar/Navbar1';
import ShippingAddressScreen from '../../screens/ShippingAddressScreen';

import { OFFSET_NAV } from '../../utils';
const ShippingPage = () => {
  return (
    <>
      <div style={{ paddingTop: OFFSET_NAV }}></div>
      <ShippingAddressScreen />
    </>
  );
};

export default ShippingPage;
