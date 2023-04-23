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

export interface IUser {
  id: number;
  email: string;
  username: string;
  password?: string;
  refreshToken?: string;
}

export type TSignup = Pick<IUser, 'email' | 'username' | 'password'>;

export type TLogin = Pick<IUser, 'email' | 'password'>;

