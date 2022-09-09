import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const CategoryLink = styled(Link)`
  color: black;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? '#fff' : 'teal')};
    font-weight: bold;
  }
`;

// export const SDivider = styled.div`
//   height: 1px;
//   width: 100%;
//   background: ${({ theme }) => theme.bg3};
//   margin: 24px 0;
// `;

export const SideControls = styled.div``;

export const ProductView = styled.div`
  display: flex;
`;
