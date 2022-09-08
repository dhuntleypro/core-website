import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import { FaBars, FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import { mobile } from '../../../responsive';
import { FaBars } from 'react-icons/fa';

export const MenuIcon = styled(FaBars)`
  font-size: 1.4rem;

  /* display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  } */
`;

export const OutsideContainer = styled.div`
  /* padding-left: 30px; */
  /* padding-right: 30px; */
  /* margin: 30px 30px 30px -30px; */
  /* flex: 1;
  width: 100%;
  background-color: red; */
  position: fixed;
  /* position: absolute; */
  width: 100%;
  z-index: 99;
  padding: 10px;
  background-color: transparent;
  /* z-index: 99; */
`;

export const MainContainer = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  /* z-index: 99; */
  /* box-shadow: 1px 3px 1px #9e9e9e; */
  border: 2px solid;
  border-color: black;
  /* box-shadow: 1px 1px 1px 2px #000; */
`;

export const LeftContainer = styled.div`
  /* display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const RightContainer = styled.div`
  /* flex: 30%;
  display: flex;
  justify-content: flex-end; */
  /* padding-right: 5%; */
`;

export const LeftContainerItems = styled.div`
  /* ${mobile({ display: 'list-item' })} */
  /* ${mobile({ display: 'none' })} */
`;

export const MobileHamburger = styled.div`
  display: none;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  /* width: 99%; */

  flex: 1;
  color: white;
  /* margin: 20px 0px 0px 0px; */
  background-color: white;
  border: 2px solid;
  border-color: black;
  padding: 20px;

  /* font-size: 16px;
  z-index: 99;
  width: 1580px;
  font-weight: '700';

  padding: 10px;
  background-color: white;

  align-items: center;

  border: 3px solid;
  border-color: black;

  margin: 10px 0px 0px 0px; */

  /* ${mobile({ display: 'list-item' })} */
  /* ${mobile({ window: '100%', margin: '0px 0px 0px 0px', width: '98%' })} */
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-right: 20px; */
`;

export const Menu = styled.div`
  color: red;
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid #fff;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: none;

  ${mobile({ fontSize: '1.4rem' })}
`;

export const Logo = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  padding-right: 40px;

  &:hover {
    color: #000;
    /* background: #000; */
  }

  ${mobile({ display: 'none' })}
`;

// export const Cart = styled(FaShoppingCart)`
//   font-size: 2rem;
//   padding-top: 10px;
//   /* transform: translate(-50%, -15%); */
//   color: #000;
// `;

export const CartLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #808080;
    transition: 0.3s ease-out;
  }
`;

export const ShopButton = styled(Link)`
  background-color: transparent;
  border: none;
  font-size: 12px;
  padding-right: 11px;
  color: black;

  &:hover {
  }

  ${mobile({ display: 'none' })}
`;
export const Button1 = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
`;

export const Button2 = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
`;

//

export const MenuLabel = styled.label`
  background-color: #b6edc8;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'black')};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: '';
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? '0' : '-1rem')};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? '0' : '1rem')};
  }
`;
