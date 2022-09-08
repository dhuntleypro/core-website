import React, { useContext, useRef, useState } from 'react';
import {
  // SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from './styles';

import { SDivider } from '../../CustomStyles/DividerElement';

import Icon1 from '../../images/unDraw_01bf71/svg-1.svg';

import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineShopping,
  // AiOutlineLeft,
  // AiOutlineRight,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';

import { MdOutlineAnalytics } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';

import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';

// import { Store } from '../../Store';
const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  // const signoutHandler = () => {
  //   ctxDispatch({ type: 'USER_SIGNOUT' });
  //   localStorage.removeItem('userInfo');
  //   localStorage.removeItem('shippingAddress');
  //   localStorage.removeItem('paymentMethod');
  //   window.location.href = '/signin';
  // };

  return (
    // <Nav>
    <SSidebar isOpen={sidebarOpen}>
      <SLogo isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
        <img src={Icon1} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {/* {secondaryLinksArray.map(({ icon, label, to }) => ( */}
      {/* ))} */}

      {/* Settings */}
      <SLinkContainer key="settings">
        <SLink
          to="/admin/settings"
          // onClick={signoutHandler}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SLinkIcon>
            <AiOutlineSetting />
          </SLinkIcon>
          {sidebarOpen && <SLinkLabel>Settings</SLinkLabel>}
        </SLink>
      </SLinkContainer>

      {/* Sign out */}
      {/* <SLinkContainer key="signout">
        <SLink
          to="#signout"
          onClick={signoutHandler}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SLinkIcon>
            <MdLogout />
          </SLinkIcon>
          {sidebarOpen && <SLinkLabel>Signout</SLinkLabel>}
        </SLink>
      </SLinkContainer> */}

      {/* <SDivider /> */}

      {/* <SLinkContainer>
        <SLink
          to=""
          // isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SLinkIcon>
            {sidebarOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
          </SLinkIcon>
          {sidebarOpen && <SLinkLabel>Minimize</SLinkLabel>}
        </SLink>
      </SLinkContainer> */}

      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === 'dark'}
          onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
        >
          <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
    // </Nav>
  );
};

const linksArray = [
  {
    label: 'Preview',
    icon: <AiOutlineHome />,
    to: '/',
    notification: 0,
  },
  {
    label: 'Dashboard',
    icon: <AiOutlineApartment />,
    to: '/admin/dashboard',
    notification: 1,
  },
  {
    label: 'Products',
    icon: <MdOutlineAnalytics />,
    to: '/admin/products',
    notification: 3,
  },
  {
    label: 'Orders',
    icon: <AiOutlineShopping />,
    to: '/admin/orders',
    notification: 0,
  },

  {
    label: 'Customers',
    icon: <BsPeople />,
    to: '/admin/users',
    notification: 0,
  },
];

// const secondaryLinksArray = [
//   {
//     label: 'Settings',
//     icon: <AiOutlineSetting />,
//     to: '/settings',
//   },
//   {
//     label: 'Logout',
//     icon: <MdLogout />,
//     to: '#signout',
//   },
// ];

export default Sidebar;
