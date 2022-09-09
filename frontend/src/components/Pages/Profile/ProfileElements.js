import styled from 'styled-components';
import useWindowSize from '../../../hooks/useWindowSize';

export const Container = styled.div`
  /* padding: 32px; */
`;

export const ImageContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  /* margin-top: 2em; */
  width: 100%;
  /* flex-wrap: wrap; */
  /* max-width: 1440px; whatever you desire */
  margin-left: auto; /* center the container */
  margin-right: auto; /* center the container */
`;

export const Card = styled.div`
  margin: 1em;
  box-shadow: 0 0 6px #000;
  object-fit: cover;
  flex: 0 0 25%; /* each card will be 25% width */
`;

export const LargeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
