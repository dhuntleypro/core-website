import React, { useState } from 'react';
import { HERO_CAPTION } from '../../../utils';
import Video from '../../../videos/video2.mp4';
// import { Button } from '../../../CustomStyles/ButtonElement';
import {
  ArrowFoward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  // HeroH1,
  HeroP,
  ShopNowButton,
  VideoBg,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1 className="font-face-gm"> Fashion is a lifestyle</HeroH1> */}
        <HeroP>{HERO_CAPTION}</HeroP>
        <HeroBtnWrapper>
          <ShopNowButton
            to="/search"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            // smooth={true}
            duration={0}
            // spy={true}
            exact="true"
          >
            {' '}
            Shop now {hover ? <ArrowFoward /> : <ArrowRight />}
          </ShopNowButton>

          {/* <Button
            to="/search"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={0}
            spy={true}
            exact="true"
            offset={-80}
          >
            Shop now {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
