import { IThemeState } from "../models/interfaces";

const initialState: IThemeState = {
  theme: localStorage.theme || "light"
};

export default initialState;