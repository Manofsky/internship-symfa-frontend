import { IInitialState } from "../models/interfaces";

const initialState: IInitialState = {
  theme: localStorage.theme || "light",
};

export default initialState;