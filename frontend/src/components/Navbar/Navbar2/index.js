import React, { useEffect, useContext } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import logger from 'use-reducer-logger';
import { Store } from '../../../Store';
import Badge from 'react-bootstrap/Badge';

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

import { Link, useLocation, useNavigate } from 'react-router-dom';

import // FaPersonBooth,
// FaRegHeart,
// FaSearch,
// FaShoppingCart,
// FaUserAstronaut,
'react-icons/fa';

import // Center,
// Container,
// Input,
// Language,
// Left,
// Logo,
// MenuCart,
// MenuFav,
// MenuItem,
// MenuProfile,
// Right,
// SearchContainer,
// SettingsIcon,
// SigninLink,
// Wrapper,
'./NavbarElements';
// import { Link } from 'react-router-dom';
// import { BRAND_NAME } from '../../../../utils';

import 'react-toastify/dist/ReactToastify.css';
// import LoopCategoriesContainer2 from '../Categories/LoopContainer/LoopCategoriesContainer2/LoopCategoriesContainer2';
// import ListOfCategories from '../../../Store/Categories/LoopContainer/ListOfCategories';
// import SearchBar from '../SearchBar/SearchBar';

// import logger from 'use-reducer-logger';
// import Axios from 'axios';
// import Announcement from '../../Announcement';

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
  // const [extendNavbar, setExtendNavbar] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { userInfo } = state;

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await Axios.post('/api/users/signin', {
  //         email,
  //         password,
  //       });
  //       ctxDispatch({ type: 'USER_SIGNIN', payload: data });
  //       localStorage.setItem('userInfo', JSON.stringify(data));
  //       navigate(redirect || '/');
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const size = useWindowSize();

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
              <ShopButton to="#signout">Help | signout</ShopButton>
              {userInfo ? (
                // <ShopButton to="/signin">"Login | Register"</ShopButton>
                <Link to="#signout" onClick={signoutHandler}>
                  Signout
                </Link>
              ) : (
                <ShopButton to="/profile">My Account</ShopButton>
              )}

              <CartButton to="/">
                <FaShoppingCart />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="black">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
                {/* Cart */}
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
