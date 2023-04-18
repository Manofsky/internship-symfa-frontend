export interface IInitialState {
  theme: 'light' | 'dark';
}

export interface IProduct {
  ProductID: number;
  ProductType: 'food' | 'drink';
  ProductTitle: string;
  ProductSubtitle: string;
  isSpicy: boolean;
  isVegetarian: boolean;
  ProductDescription: string;
  UnitPrice: number;
  SmallImage: string;
  BigImage: string;
}