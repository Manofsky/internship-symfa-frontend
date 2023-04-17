export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  refreshToken: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}

export interface IInitialState {
  theme: 'light' | 'dark';
  user: IUser | null;
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