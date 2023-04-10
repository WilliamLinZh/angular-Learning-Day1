export interface Card {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const cards = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'New Brand Launch: Deals up to 25% off Honeywell',
    imageUrl:
      'https://images-fe.ssl-images-amazon.com/images/G/65/Gateway_Launch/3P-2023/BrandProductlaunch/Honeywell/XCM_Manual_1552801_5476447_379x304_2X._SY304_CB592555633_.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'New launch: Up to 10% off BE@RBRICK Toys',
    imageUrl:
      'https://images-fe.ssl-images-amazon.com/images/G/65/COOP/Durian/2023/BTF_Category_Card_Desktop_tasc_379x304._SY304_CB592906884_.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Get up to additional S$100 off on LG products',
    imageUrl:
      'https://images-fe.ssl-images-amazon.com/images/G/65/COOP/Durian/2023/20230322_AC_B_Homepage_Desktop_Category_Card_379x3042x_tasc._SY304_CB594428004_.jpg',
  },
  {
    id: 4,
    name: 'Phone Standard',
    price: 299,
    description: 'Free gift with purchase of Garmin Forerunner 265',
    imageUrl:
      'https://images-fe.ssl-images-amazon.com/images/G/65/Events/2023/Doubles/44SALE/xcm_banners_2022_monthlydeals-desktop-single-category-card-2x-379x304-0a92l-bd3p1-20ok3-82u2n-v6ed1_758x608_sg-en._SY304_CB592909104_.jpg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
