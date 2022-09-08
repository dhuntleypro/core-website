import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: black;
  height: 40px;
`;

export const CategoryLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 12px;
`;

export const CategoryButton = styled.button`
  color: black;
  font-weight: bold;
  font-size: 12px;
  border: none;
  background-color: transparent;
`;
