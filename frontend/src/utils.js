// import image1 from './images/Category/image1.png';
// import image2 from './images/Category/image2.png';
// import image3 from './images/Category/image3.png';

import newsletterImage from './images/Newsletter/NewsletterImage.jpg';

import image1 from './images/Pokemon/image6.jpeg';
import image2 from './images/Pokemon/image10.jpeg';
import image3 from './images/Pokemon/image9.jpeg';

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// # Global Constants
export const OFFSET_CART_PAGE = true;

export const OFFSET_NAV = '180px';
export const BRAND_NAME = 'Chess pawns';
export const BRAND_EMAIL = 'info@chesspawn.com';
export const BRAND_EMAIL_LINK = 'mailto:' + BRAND_EMAIL;
export const BRAND_PHONE_NUMBER = '3478800665';
export const BRAND_PHONE_NUMBER_LINK = 'tel:' + BRAND_PHONE_NUMBER;
export const BRAND_PHONE_NUMBER_Styled = '(347)880-0665';

export const BRAND_ADDRESS = '000 Fulton Avenue, \nBrooklyn NY , \n 11207';
export const BRAND_CITY = 'Brooklyn';
export const BRAND_YEAR_FOUNDED = '2020';

// TIMED POP UP
export const TIMED_POPUP_ACTIVE = false;
// Social Media
export const BRAND_FACEBOOK_URL = '';
export const BRAND_INSTAGRAM_URL = '';
export const BRAND_YOUTUBE_URL = '';
export const BRAND_TWITTER_URL = '';

export const STORE_TYPE = 'Products';
export const SINGLE_PAGE_WEBSITE = true;
export const NAVIGATE_TO_CART = false;

//  Shippping
export const FREE_SHIPPING_AMOUNT = 100;

// Colors
export const PRIMARY_COLOR = 'black';
export const SECONDARY_COLOR = 'white';

// Popup Newsletter
export const NEWSLETTER_IMAGE = newsletterImage;

// HERO
export const HERO_CAPTION = 'Pokemon Chess Changes Everything';

// SLIDER
export const SLIDER_IMAGE_1 = image1;
export const SLIDER_ALT_1 = '';
export const SLIDER_TITLE_1 = 'SUMMER SALE';
export const SLIDER_DESC_1 =
  "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.";
export const SLIDER_BG_1 = 'f5fafd';

export const SLIDER_IMAGE_2 = image2;
export const SLIDER_ALT_2 = '';
export const SLIDER_TITLE_2 = 'AUTUMN COLLECTION';
export const SLIDER_DESC_2 =
  "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.";
export const SLIDER_BG_2 = 'f5fafd';

export const SLIDER_IMAGE_3 = image3;
export const SLIDER_ALT_3 = '';
export const SLIDER_TITLE_3 = 'SUMMER SALE';
export const SLIDER_DESC_3 =
  "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.";
export const SLIDER_BG_3 = 'f5fafd';

// CATEGORY_IMAGE_1
export const CATEGORY_IMAGE_1 = image1;
export const CATEGORY_TITLE_1 = 'Buy Just 1 Piece';
export const CATEGORY_IMAGE_2 = image2;
export const CATEGORY_TITLE_2 = 'Buy all Pieces';
export const CATEGORY_IMAGE_3 = image3;
export const CATEGORY_TITLE_3 = 'Pieces and Board';

export const NEWSLETTER_TITLE_1 = 'Newsletter';
export const NEWSLETTER_DESC_1 =
  'Get timely updates from your favorite products.';
export const NEWSLETTER_DISCLOSER_1 =
  'By entering your email address, you agree to receive' +
  { BRAND_NAME } +
  'offers, promotions, other commercial messages. You can view our Privacy Policy here and you may unsubscribe at any time.';
export const NEWSLETTER_TITLE_2 = 'Sign up for Email';
export const NEWSLETTER_DESC_2 =
  'emails and get first dibs on new arrivals, sales, exclusive content, events and more!';
export const NEWSLETTER_DISCLOSER_2 =
  'By entering your email address, you agree to receive' +
  { BRAND_NAME } +
  'offers, promotions, other commercial messages. You can view our Privacy Policy here and you may unsubscribe at any time.';
