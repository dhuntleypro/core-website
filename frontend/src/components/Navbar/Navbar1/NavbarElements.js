import { MdPerson, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from '../../../responsive';

// export const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: '50px' })}
// `;

export const Container = styled.nav`
  background-color: #fff;
  /* height: 100px; */
  /* outline: 1px; */

  /* border-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  border: 3px solid; */

  /* background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')}; */
  /* background: '#000'; */

  /* height: 122px; */
  /* margin-top: ${({ navOffset }) => (navOffset ? '-122px' : '0px')}; */
  /* margin-top: -122px; */
  /* color: red; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  /* font-size: 1rem; */
  /* font-size: 10px; */
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* ${mobile({ padding: '10px 0px' })} */
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none' })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: 'none' })}
`;

export const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  display: none;
  ${mobile({ display: 'none' })}
  ${tablet({ display: 'none' })}
`;

export const Logo = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  ${mobile({ fontSize: '24px' })}
  color: black;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* ${mobile({ flex: 2, justifyContent: 'center' })} */
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ display: 'none' })}/* ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
  })} */
`;

export const MenuCart = styled.div`
  margin-left: 25px;
`;

export const MenuProfile = styled.div`
  margin-left: 25px;
`;

export const MenuFav = styled.div`
  margin-left: 25px;
`;

export const SigninLink = styled(Link)``;

export const SigninIcon = styled(MdPerson)`
  margin-left: 8px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SettingsIcon = styled(MdSettings)`
  margin-left: 8px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
