import styled from 'styled-components';
import { mobile } from '../../responsive';
// import { Link } from 'react-scroll';

export const PageColumn2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20;

  /* ${mobile({ display: 'block' })} */
`;

export const PageColumn3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20;
`;

export const PageColumn4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20;
`;

export const PageColumn5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20;
`;
