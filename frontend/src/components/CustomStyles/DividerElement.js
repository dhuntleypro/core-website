import styled from 'styled-components';
import { mobile } from '../../responsive';

// Dividers

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: 24px 0;
`;

export const HDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: 24px 0;
  ${mobile({ display: 'none' })}
`;
