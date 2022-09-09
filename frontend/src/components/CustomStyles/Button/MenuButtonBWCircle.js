import styled from 'styled-components';
import { Link } from 'react-scroll';

// Confirmed

export const MenuButtonBWCircle = styled.div`
  cursor: pointer;
  border-radius: 100%;
  border: ${({ scrollNav }) => (scrollNav ? 'transparent' : '1px solid #000')};
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
