import { IInitialState } from "../models/interfaces";

const initialState: IInitialState = {
  theme: localStorage.theme || "light",
  user: null,
};

export default initialState;