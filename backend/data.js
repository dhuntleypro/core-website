import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Darrien',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,

      homeAddress: 'OOO Address ave.',
      homeCity: 'Brooklyn',
      homeState: 'NY',
      homeZipCode: 11234,
      profileImageURL: 'image1',
      phoneNumber: '3478800665',
      loggedIn: true,
      cartHasItems: false,
      cartTotal: 100,
      agreedToTerms: false,
      agreedtoTermsDate: '05/12/1993',
      agreedToContract: false,

      birthday: 18,
      birthMonth: 7,
      birthYear: 1993,
      gender: 'male',
      shirtSize: 'M',
      waistSizeInNumbers: 0,
      pantsLength: 0,
      waistSize: 'M',
      subscribed: false,
      subscribedToNewsletter: false,
      userIsActive: true,
    },
    {
      name: 'Rickw',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,

      homeAddress: '000 fulton',
      homeCity: 'Brooklyn',
      homeState: 'NY',
      homeZipCode: 11277,
      profileImageURL: 'image1',
      phoneNumber: '3478800665',
      loggedIn: true,
      cartHasItems: false,
      cartTotal: 100,
      agreedToTerms: false,
      agreedtoTermsDate: '05/12/1993',
      agreedToContract: false,

      birthday: 18,
      birthMonth: 7,
      birthYear: 1993,
      gender: 'male',
      shirtSize: 'M',
      waistSizeInNumbers: 0,
      pantsLength: 0,
      waistSize: 'M',
      subscribed: false,
      subscribedToNewsletter: false,
      userIsActive: true,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Rocker',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',

      active: true,
      views: 0,
      gender: 'male',
      color: 'black',
      size: 0,
      sizeInNumbers: 0,
      yearMade: 2020,
      likes: 0,
      condition: 'new',
      weightInKilograms: 0,
      variantType: true,
      // variants: [
      //   {
      //     name: 'variant name',
      //     description: 'variant description',
      //     color: 'black',
      //     sizeAsString: 'M',
      //     sizeInNumbers: 0,
      //     likes: 0,
      //     price: 0,
      //     views: 0,
      //     active: true,
      //   },
      //   {
      //     name: 'variant name2',
      //     description: 'variant description',
      //     color: 'black',
      //     sizeAsString: 'M',
      //     sizeInNumbers: 0,
      //     likes: 0,
      //     price: 0,
      //     views: 0,
      //     active: true,
      //   },
      // ],
      onSale: false,
      salePrice: 200,
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',

      active: true,
      views: 0,
      gender: 'male',
      color: 'black',
      size: 0,
      sizeInNumbers: 0,
      yearMade: 2020,
      likes: 0,
      condition: 'new',
      weightInKilograms: 0,
      variantType: false,
      // variants: [],
      onSale: false,
      salePrice: 200,
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',

      active: true,
      views: 0,
      gender: 'male',
      color: 'black',
      size: 0,
      sizeInNumbers: 0,
      yearMade: 2020,
      likes: 0,
      condition: 'new',
      weightInKilograms: 0,
      variantType: false,
      // variants: [],
      onSale: false,
      salePrice: 200,
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',

      active: true,
      views: 0,
      gender: 'male',
      color: 'black',
      size: 0,
      sizeInNumbers: 0,
      yearMade: 2020,
      likes: 0,
      condition: 'new',
      weightInKilograms: 0,
      variantType: false,
      // variants: [],
      onSale: false,
      salePrice: 200,
    },
  ],

  services: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
  campaigns: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
  teams: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;