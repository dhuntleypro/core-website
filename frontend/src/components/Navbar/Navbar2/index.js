// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Popup from '../../../../Store/Popups/Main';
// import PopupWindow from '../../../Store/PopupWindow';
// import { LeftContainer, RightContainer } from '../../Navbar1/NavbarElements';
import React, { useContext } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

// import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
// import { animateScroll as scroll } from 'react-scroll';
// import Announcement from '../../../Announcement';

// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
import { Store } from '../../../Store';
import Badge from 'react-bootstrap/Badge';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { BRAND_NAME } from '../../../../utils';

// import logger from 'use-reducer-logger';
// import axios from 'axios';

import {
  // Container,
  // ContainerWrapper,
  // Logo,
  // Menu,
  // Cart,
  // CartLink,\
  LeftContainer,
  RightContainer,
  // MenuLabel,
  // Icon,
  CartButton,
  OutsideContainer,
  ShopButton,
  // LeftContainerItems,
  // MobileHamburger,
  Logo,
  MainContainer,
  MenuIcon,
} from './NavbarElements';
import { FaShoppingCart } from 'react-icons/fa';
// import { SidebarMenu } from '../../Sidebar/Sidebar2/SidebarElements';
// import { Bars } from '../Navbar4/NavbarElements';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
const Navbar = () => {
  // const [buttonPopup, setButtonPopup] = useState(false);
  // const [extendNavbar, setExtendNavbar] = useState(false);

  const { state } = useContext(Store);
  const { cart } = state;

  const size = useWindowSize();

  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header>
        <OutsideContainer>
          <MainContainer>
            <LeftContainer>
              {/* <MenuIcon /> */}

              {size.width < 800 ? (
                <MenuIcon />
              ) : (
                <>
                  <Logo to="/">P O W.</Logo>
                  <ShopButton to="/collections">Shop</ShopButton>
                  <ShopButton to="/">E-Gift Card</ShopButton>
                  <ShopButton to="/">Print Care</ShopButton>

                  {/* <button onClick={setShowSidebar}>yooooo</button> */}
                </>
              )}
            </LeftContainer>

            <RightContainer>
              <ShopButton to="/">Search</ShopButton>
              <ShopButton to="/help">Help</ShopButton>
              <ShopButton to="/profile">My account</ShopButton>
              <CartButton to="/">
                <FaShoppingCart />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="black">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </CartButton>
            </RightContainer>
          </MainContainer>
        </OutsideContainer>
      </header>

      {/* 
      <SidebarMenu
        trigger={showSidebar}
        setTrigger={setShowSidebar}
      ></SidebarMenu> */}

      {/* <PopupWindow trigger={showSidebar} setTrigger={setShowSidebar}> */}
      {/* <NewsLetterPopupContent /> */}
      {/* <h1>yoooo</h1> */}
      {/* </PopupWindow> */}
    </>
  );
};

export default Navbar;
