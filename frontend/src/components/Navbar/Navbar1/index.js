import React, { useEffect, useState, useContext } from 'react';
import { Store } from '../../../Store';
import Badge from 'react-bootstrap/Badge';
// import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Helmet } from 'react-helmet-async';
// import { toast } from 'react-toastify';
// import { getError } from '../../../utils';
// import ScrollToTop from '../components/Store/ScrollToTop';

// import { HiBadgeCheck } from 'react-icons/hi';
import {
  // FaPersonBooth,
  FaRegHeart,
  FaSearch,
  FaShoppingCart,
  FaUserAstronaut,
} from 'react-icons/fa';

import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuCart,
  MenuFav,
  MenuItem,
  MenuProfile,
  Right,
  SearchContainer,
  // SettingsIcon,
  SigninLink,
  Wrapper,
} from './NavbarElements';
// import { Link } from 'react-router-dom';
// import { BRAND_NAME } from '../../../../utils';

import 'react-toastify/dist/ReactToastify.css';
// import LoopCategoriesContainer2 from '../Categories/LoopContainer/LoopCategoriesContainer2/LoopCategoriesContainer2';
// import ListOfCategories from '../../../Store/Categories/LoopContainer/ListOfCategories';
// import SearchBar from '../SearchBar/SearchBar';

// import logger from 'use-reducer-logger';
// import Axios from 'axios';
// import Announcement from '../../Announcement';

const Navbar = () => {
  //   const [extendNavbar, setExtendNavbar] = useState(false);

  const { state } = useContext(Store);
  const { cart } = state;

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

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

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <FaSearch style={{ color: 'gray', fontSize: 16 }} />

              {/* <SearchBar placeholder="Search..." data={products.name} /> */}
            </SearchContainer>
          </Left>
          <Logo to="/">BRAND_NAME</Logo>
          <Center>
            <Logo to="/">BRAND_NAME</Logo>
          </Center>
          <Right>
            {userInfo ? <></> : <MenuItem>REGISTER</MenuItem>}

            {userInfo.isAdmin ? (
              <SigninLink to="/admin/dashboard">
                {/* <SigninLink to="/category"> */}
                <MenuItem>Admin</MenuItem>
              </SigninLink>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            <MenuProfile>
              <Link to="/profile" className="nav-link">
                <FaUserAstronaut />
              </Link>
              {/* FaUser */}
            </MenuProfile>
            <MenuFav>
              <Link to="/" className="nav-link">
                <FaRegHeart />{' '}
              </Link>
            </MenuFav>
            <MenuCart>
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              {/* <HiBadgeCheck badgeContent={4} color="primary">
              <FaShoppingCart />
            </HiBadgeCheck> */}
            </MenuCart>
          </Right>
        </Wrapper>
        {/* <ListOfCategories /> */}
        {/* <Announcement /> */}
      </Container>
    </>
  );
};

export default Navbar;
