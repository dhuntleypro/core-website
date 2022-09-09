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

// /////////////////////////////////////

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const ButtonBlackAndRounded = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const ButtonBlackAndTransparent = styled(Link)`
  /* border-radius: 50px; */
  background: ${({ primary }) => (primary ? '#000' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  outline: 1px;

  border-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  border: 2px solid;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#000')};
    border: 2px solid;
    border-color: ${({ dark }) => (dark ? '#000' : '#fff')};
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
  }
`;

export const CustomButtonBlack = styled.button`
  width: 200px;
  height: 30px;
  background-color: black;
  color: white;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

export const CustomButtonBlackBorder = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  color: black;
  font-size: 13px;

  border-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  border: 1px solid;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
