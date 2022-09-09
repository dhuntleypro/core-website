import React from 'react';
import InfoSection from '../../../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../../../components/InfoSection/Data';

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default HomePage;
