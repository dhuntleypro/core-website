import { ContainerTitle, Section } from './DashboardElements';

import { BsFillCalendar2WeekFill } from 'react-icons/bs';

import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Store } from '../../../Store';
import { getError } from '../../../utils';
import LoadingBox from '../../../components/Store/LoadingBox';
import MessageBox from '../../../components/Store/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const Dashboard = () => {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/orders/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <>
      <ContainerTitle>Dashbboard</ContainerTitle>

      <Section>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {/* Unfufilled orders */}
            <div className="analytic ">
              <div className="logo">
                <BsFillCalendar2WeekFill />
              </div>
              <div className="content">
                <h5>Unfufilled Orders</h5>
                <h2>
                  {summary.orders && summary.users[0]
                    ? summary.orders[0].numOrders
                    : 0}
                </h2>
              </div>
            </div>

            {/*  */}
            <div className="analytic ">
              <div className="logo">
                <BsFillCalendar2WeekFill />
              </div>
              <div className="content">
                <h5>Number of Customers</h5>
                <h2>
                  {summary.users && summary.users[0]
                    ? summary.users[0].numUsers
                    : 0}
                </h2>
              </div>
            </div>

            <div className="analytic ">
              <div className="logo">
                <BsFillCalendar2WeekFill />
              </div>
              <div className="content">
                <h5>Total Sales</h5>
                <h2>
                  $
                  {summary.orders && summary.users[0]
                    ? summary.orders[0].totalSales.toFixed(2)
                    : 0}
                </h2>
              </div>
            </div>

            <div className="analytic ">
              <div className="logo">
                <BsFillCalendar2WeekFill />
              </div>
              <div className="content">
                <h5>Unfufilled Orders</h5>
                <h2>
                  {summary.users && summary.users[0]
                    ? summary.users[0].numUsers
                    : 0}
                </h2>
              </div>
            </div>
          </>
        )}
      </Section>
    </>
  );
};

export default Dashboard;
