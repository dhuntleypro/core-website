// import React, { useContext, useEffect, useReducer } from 'react';
// // import { Container } from './ProductElements';

// import axios from 'axios';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { Store } from '../../../Store';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return {
//         ...state,
//         products: action.payload.products,
//         page: action.payload.page,
//         pages: action.payload.pages,
//         loading: false,
//       };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'CREATE_REQUEST':
//       return { ...state, loadingCreate: true };
//     case 'CREATE_SUCCESS':
//       return {
//         ...state,
//         loadingCreate: false,
//       };
//     case 'CREATE_FAIL':
//       return { ...state, loadingCreate: false };

//     case 'DELETE_REQUEST':
//       return { ...state, loadingDelete: true, successDelete: false };
//     case 'DELETE_SUCCESS':
//       return {
//         ...state,
//         loadingDelete: false,
//         successDelete: true,
//       };
//     case 'DELETE_FAIL':
//       return { ...state, loadingDelete: false, successDelete: false };

//     case 'DELETE_RESET':
//       return { ...state, loadingDelete: false, successDelete: false };
//     default:
//       return state;
//   }
// };

// const Product = () => {
//   const [
//     {
//       products,

//       successDelete,
//     },
//     dispatch,
//   ] = useReducer(reducer, {
//     loading: true,
//     error: '',
//   });

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const page = sp.get('page') || 1;

//   const { state } = useContext(Store);
//   const { userInfo } = state;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(`/api/products/admin?page=${page} `, {
//           headers: { Authorization: `Bearer ${userInfo.token}` },
//         });

//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (err) {}
//     };

//     if (successDelete) {
//       dispatch({ type: 'DELETE_RESET' });
//     } else {
//       fetchData();
//     }
//   }, [page, userInfo, successDelete]);

//   return (
//     <>
//       {/* <Container>yooo</Container> */}
//       {products.map((product) => (
//         <div>yoo</div>
//       ))}
//     </>
//   );
// };

// export default Product;
