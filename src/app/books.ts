export interface Book {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const books = [
  {
    id: 1,
    name: 'Phone XL',
    author: '',
    price: 799,
    description: 'New Brand Launch: Deals up to 25% off Honeywell',
    imageUrl:
      'https://m.media-amazon.com/images/I/51qG7ZVRqUL._SX394_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    author: '',
    price: 699,
    description: 'New launch: Up to 10% off BE@RBRICK Toys',
    imageUrl:
      'https://m.media-amazon.com/images/I/41mtUoTi8ZL._SX351_BO1,204,203,200_.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    author: '',
    price: 299,
    description: 'Get up to additional S$100 off on LG products',
    imageUrl:
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  },
  {
    id: 4,
    name: 'Phone Standard',
    author: '',
    price: 299,
    description: 'Free gift with purchase of Garmin Forerunner 265',
    imageUrl:
      'https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg',
  },
];
