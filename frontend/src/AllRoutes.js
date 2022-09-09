import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import ProtectedRoute from './components/Store/ProtectedRoute';
import AdminRoute from './components/Store/AdminRoute';

// Pages
// import Home from './pages';

// Admin Pages
import UserEditScreen from './pages/Admin/Customers/UserEditScreen';
import ProductEditScreen from './pages/Admin/Products/ProductEditScreen';
import OrderListScreen from './pages/Admin/Orders/OrderListScreen';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Customer from './pages/Admin/Customers/Customer';
import Product from './pages/Admin/Products/Product';

// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
// import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
// import ProfileScreen from './screens/ProfileScreen';

// import SearchScreen from './components/Store/Search/SearchScreen';
import Settings from './pages/Admin/Settings/Settings';
// import Cart from './pages/Sections/Cart';
import CartPage from './pages/Customer/CartPage';
import ProductDetails from './pages/Customer/ProductDetailsPage';
// import DashboardControls from './pages/Admin/DashboardControls';
import SearchPage from './pages/Customer/SearchPage';
import ProfilePage from './pages/Customer/ProfilePage';
import ContactUsPage from './pages/Customer/ContactUsPage';
import ShippingPage from './pages/Customer/ShippingPage';
// import DashboardScreen from './screens/DashboardScreen';

// import ProductListScreen from './screens/ProductListScreen';

// import UserListScreen from './screens/UserListScreen';

// import Navbar from './pages/Sections/NavSection/Navbar/Navbar1';
// import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

import CollectionsPage from './pages/Customer/CollectionsPage';
import HomePage from './pages/Customer/HomePage/HomePage';
// import ImageResize from './components/ImageCropper/ImageCropper';

const AllRoutes = () => {
  // const location = useLocation();
  return (
    <main>
      <>
        <Routes>
          <Route path="/collections" element={<CollectionsPage />} />

          <Route path="/product/:slug" element={<ProductDetails />} />
          {/* <Route path="/product/:slug" element={<ProductScreen />} /> */}

          {/* <Route path="/cart" element={<CartScreen />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                {/* <ProfileScreen /> */}
                <ProfilePage />
                {/* <ImageResize /> */}
              </ProtectedRoute>
            }
          />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderScreen />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/orderhistory"
            element={
              <ProtectedRoute>
                <OrderHistoryScreen />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/shipping" element={<ShippingPage />}></Route>
          <Route path="/payment" element={<PaymentMethodScreen />}></Route>
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <>
                  {/* <Navbar /> */}
                  {/* <DashboardScreen /> */}
                  {/* <DashboardScreen /> */}
                  <Dashboard />
                  {/* <DashboardControls /> */}
                </>
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/settings"
            element={
              <AdminRoute>
                <>
                  {/* <Navbar /> */}
                  {/* <DashboardScreen /> */}
                  {/* <DashboardScreen /> */}
                  <Settings />
                </>
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <OrderListScreen />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                {/* <UserListScreen /> */}
                <Customer />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                {/* <ProductListScreen /> */}
                <Product />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/product/:id"
            element={
              <AdminRoute>
                <ProductEditScreen />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/user/:id"
            element={
              <AdminRoute>
                <UserEditScreen />
              </AdminRoute>
            }
          ></Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </main>
  );
};

export default AllRoutes;
